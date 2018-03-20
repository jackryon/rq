import { combineReducers } from 'redux'

import {
	adminUsers,
	rqs
} from './reducer-resources'

import {
	activeForm,
	flashMessage,
	flashClass	
} from './reducer-ui'

import {
	defaultHRData,
	defaultRQ,
	registrationData,
	loginData
}	from './reducer-forms'

export default combineReducers({
	adminUsers,
	rqs,
	activeForm,
	flashMessage,
	flashClass,
	defaultHRData,
	defaultRQ,
	registrationData,
	loginData
})
