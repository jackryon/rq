import { formatDate } from '../util'

let defaultHR = {
  hr: 132,
  pace: '9:30',
  date: formatDate(new Date())
}

let defaultReg = {
  email: '',
  password: '',
  passwordConfirmation: '',
  fullName: ''
}

export const defaultHRData = (state = defaultHR, action) => {
  switch(action.type){
    case 'DEFAULT_HR_DATA_CHANGED':
      return Object.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}

export const defaultRQ = (state = { value: 47.75, date: formatDate(new Date()) }, action) => {
  switch(action.type){
    case 'DEFAULT_RQ_CHANGED':
      return Object.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}

export const registrationData = (state = defaultReg, action) => {
  switch(action.type){
    case 'REGISTRATION_DATA':
      return Object.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}

export const loginData = (state = { email: '', password: '' }, action) => {
  switch(action.type){
    case 'LOGIN_DATA':
      return Object.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}
