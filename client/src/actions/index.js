import { httpHeaders } from '../util'

// ACTIONS

export const flashMessage = (message) => {
  return (dispatch) => {
    dispatch(setFlashMessage(message))
    dispatch(setFlashClass('visible'))

    setTimeout(() => {
      dispatch(setFlashClass('hidden'))
    }, 1000)
  }
}

export const setFlashMessage = (message) => {
  return {
    type: 'FLASH_MESSAGE',
    message: message
  }
}

export const setFlashClass = (flashClass) => {
  return {
    type: 'FLASH_CLASS',
    flashClass: flashClass
  }
}

export const activeView = (newView) => {
  return {
    type: 'ACTIVE_VIEW',
    activeView: newView
  }
}

export const rqDelete = (rqId, url) => {
  return (dispatch) => {
    fetch(url + '/' + rqId, {
      method: 'DELETE',
      headers: httpHeaders()
    })
    .then(
      response => response.json(),
      error => console.log('Error:', error)
    ).then(
      json => {
        dispatch(rqsFetch(url))
        dispatch(flashMessage('RQ Deleted!'))
      }
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
    .then(
      json => {
        dispatch(rqsFetch(url))
        dispatch(flashMessage('RQ Saved!'))
      }
    )
  }
}

export const defaultRQChanged = (e) => {
  return {
    type: 'DEFAULT_RQ_CHANGED',
    name: e.target.name,
    value: e.target.value
  }
}

export const defaultHRDataChanged = (e) => {
  return {
    type: 'DEFAULT_HR_DATA_CHANGED',
    name: e.target.name,
    value: e.target.value
  }
}

export const switchForm = (activeForm) => {
  return {
    type: 'SWITCH_FORMS',
    activeForm: activeForm
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

    fetch(url, {
      headers: httpHeaders()
    })
    .then(
      (response) => {
        dispatch(rqsIsLoading(false))
        return response.json()
      },
      error => console.log('Error:', error)
    )
    .then(
      json => {
        dispatch(rqsFetchSuccess(json))
      }
    )
    .catch(
      error => dispatch(rqsHasErrored(true))
    )
  }
}

export const rqsFetchSuccess = (rqs) => {
  return {
    type: 'RQS_FETCH_SUCCESS',
    rqs
  }
}
