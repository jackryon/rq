import { httpHeaders } from '../util'

// ACTIONS

export const rqDelete = (url) => {
  return (dispatch) => {
    fetch(url, {
      method: 'DELETE',
      headers: httpHeaders()
    })
    .then(
      response => response.json(),
      error => console.log('Error:', error)
    ).then(
      json => dispatch(rqsFetch(url))
    )
  }
}

export const rqPost = (rq, url) => {
  return (dispatch) => {
    fetch(url, {
      headers: httpHeaders(),
      method: 'POST',
      body: JSON.stringify(rq)
    })
    .then(
      response => response.json(),
      error => console.log('Error:', error)
    )
    .then((json) => {
      dispatch(rqsFetch(url))
    })
  }
}

export const defaultRQChanged = (e) => {
  return {
    type: 'DEFAULT_RQ_CHANGED',
    name: e.target.name,
    value: e.target.value
  }
}

export const rqsPostSuccess = (rq) => {
  return {
    type: 'RQS_POST_SUCCESS',
    rq: rq
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
