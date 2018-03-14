let defaultData = {
  email: '',
  password: '',
  passwordConfirmation: '',
  fullName: ''
}

export const registrationData = (state = defaultData, action) => {
  switch(action.type){
    case 'REGISTRATION_DATA':
      return Object.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}

