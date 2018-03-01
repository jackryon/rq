export default function(state = 'rqForm', action){
  switch(action.type){
    case 'SWITCH_FORMS':
      return action.activeForm
    default:
      return state
  }
}
