import { httpHeaders } from '../util'

export const assertAuth = (response) => {
	if(response.status === 401) {
		
	}
}

export const adminGetUsers = (url) => {
  return (dispatch) => {
    fetch(url, {
      headers: httpHeaders()
    })
    .then(
      response => response.json(),
      error => console.error(error)
    )
    .then(
      json => {
				dispatch(adminUsers(json))
      }
    )
  }
}

export const adminDeleteUser = (url, id) => {
  return (dispatch) => {
    fetch(url + '/' + id, {
      headers: httpHeaders(),
      method: 'DELETE'
    })
    .then(
      response => response.json(),
      error => console.error(error)
    )
    .then(
      json => {
        dispatch(flashMessage('User deleted!'))
        dispatch(adminGetUsers(url))
      }
    )
  }
}

export const adminUsers = (data) => {
  return {
    type: 'ADMIN_USERS',
    users: data
  }
}

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
      error => console.error(error)
    )
    .then(
      json => {
        if(json.errors) return dispatch(flashMessage(json.message, 3000))
				dispatch(flashMessage('Registered!'))
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
        console.error('Error:', error)
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
      error => console.error('Error:', error)
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
      response => {
				debugger
				if(response.ok !== true)
        dispatch(rqsIsLoading(false))
        response.json()
      },
      error => console.error('Error:', error)
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
