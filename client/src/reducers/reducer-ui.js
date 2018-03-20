export const activeForm = (state = 'rqForm', action) => {
  switch(action.type){
    case 'SWITCH_FORMS':
      return action.activeForm
    default:
      return state
  }
}

//export const activeView = (state = 'login', action){
//  switch(atcion.type){
//    case 'CURRENT_APP_VIEW':
//      return active.activeView
//    default:
//      return state
//  }
//}

export const flashMessage = (state = null, action) => {
  switch(action.type) {
    case 'FLASH_MESSAGE':
      return action.message
    default:
      return state
  }
}

export const flashClass = (state = 'hidden', action) => {
  switch(action.type){
    case 'FLASH_CLASS':
      return action.flashClass
    default:
      return state
  }
}
