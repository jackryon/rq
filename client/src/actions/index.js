import { httpHeaders } from '../util/helpers'

// ACTIONS

export const rqsPost = (rq, url) => {
  return (dispatch) => {
    fetch(url, { headers: httpHeaders() })
      .then((response) => {
        if(!response.ok) throw Error(response.statusText)
        debugger
        return response
      })
      .then((response) => {
        debugger
        return response.json()
      })
      .then((rq) => {
        debugger
      })
  }
}

export const rqValsChanged = (name, value) => {
  return {
    type: 'rq_vals_changed', {
      name: name,
      value: value
    }
  }
}

export const rqsPostSuccess = (rq) => {
  return {
    type: 'RQS_POST_SUCCESS',
    rq
  }
}

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
    dispatch(rqsIsLoading(true))

    fetch(url, { headers: httpHeaders() })
      .then((response) => {
        if(!response.ok) throw Error(response.statusText)
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
