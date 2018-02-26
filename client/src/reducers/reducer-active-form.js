export default function(state = null, action){
  switch(action.type){
    case 'SWITCH_FORMS':
      return action.payload
  }


  return state
}
