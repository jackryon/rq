export default function(state = 'rqForm', action){
  switch(action.type){
    case 'SWITCH_FORMS':
      return action.payload
    default:
      return state
  }
}
