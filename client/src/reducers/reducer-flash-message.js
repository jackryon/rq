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

