export const loginData = (state = { email: '', password: '' }, action) => {
  switch(action.type){
    case 'LOGIN_DATA':
      return Object.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}
