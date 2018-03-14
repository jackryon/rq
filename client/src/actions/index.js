import { httpHeaders } from '../util'

// ACTIONS

export const login = (data, url) => {
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      headers: httpHeaders()
    })
    .then(
      response => response.json(),
      error => console.error(error)
    )
    .then(
      json => {
        if(json.error) return dispatch(flashMessage(json.error.message, 3000))
      }
    )
  }
}

export const register = (data, url) => {
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      headers: httpHeaders(),
      body: JSON.stringify(data)
    })
    .then(
      response => response.json(),
      error => console.log(error)
    )
    .then(
      json => {
        if(json.errors) return dispatch(flashMessage(json.message, 3000))
      }
    )
  }
}

export const setRegistrationData = (e) => {
  return {
    type: 'REGISTRATION_DATA',
    name: e.target.name,
    value: e.target.value
  }
}

export const loggedIn = () => {

}

export const setLoginData = (e) => {
  return {
    type: 'LOGIN_DATA',
    name: e.target.name,
    value: e.target.value
  }
}

export const flashMessage = (message, delay = 1000) => {
  return (dispatch) => {
    dispatch(setFlashMessage(message))
    dispatch(setFlashClass('visible'))

    setTimeout(() => {
      dispatch(setFlashClass('hidden'))
    }, delay)
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
      (response) => {
        response.json()
      },
      (error) => {
        console.log('Error:', error)
      }
    ).then(
      (json) => {
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
