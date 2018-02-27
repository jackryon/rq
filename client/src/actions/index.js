// ACTIONS

export const switchForm = (activeForm) => {
  return {
    type: 'SWITCH_FORMS',
    payload: activeForm
  }
}

export const rqsIsLoading = (bool) => {
  return {
    type: 'RQS_IS_LOADING',
    rqsIsLoading: bool
  }
}

export const rqsHasErrored = (bool = true) => {
  return {
    type: 'RQS_HAS_ERRORED',
    rqsHasErrored: bool
  }
}

export const rqsFetch = (url) => {
  return (dispatch) => {
    //dispatch(rqsIsLoading(true))

    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => {
      if(!response.ok){
          throw Error(response.statusText)
      }

      dispatch(rqsIsLoading(false))

      return response
    })
    .then((response) => {
      return response.json()
    })
    .then((rqs) => {
      dispatch(rqsFetchSuccess(JSON.parse(rqs)))
    })
    .catch(() => {
      dispatch(rqsHasErrored(true))
    })
  }
}

export const rqsFetchSuccess = (rqs) => {
  return {
    type: 'RQS_FETCH_SUCCESS',
    rqs
  }
}
