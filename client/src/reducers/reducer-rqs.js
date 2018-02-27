export function rqs(state = [], action){
  switch(action.type){
    case 'RQS_FETCH_SUCCESS':
      return action.rqs
    default:
      return state
  }
}

export function rqsHasErrored(state = false, action){
  switch(action.type){
    case 'RQS_HAS_ERRORED':
      return action.rqsHasErrored
    default:
      return state
  }
}

export function rqsIsLoading(state = true, action){
  debugger
  switch(action.type){
    case 'RQS_IS_LOADING':
      return action.rqsIsLoading
    default:
      return state
  }
}


