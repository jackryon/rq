// ADMIN
export const adminUsers = (state = [], action) => {
  switch(action.type) {
    case 'ADMIN_USERS':
      return action.users
    default:
      return state
  }
}

// USER-FACING
export function rqs(state = [], action){
  switch(action.type){
    case 'RQS_FETCH_SUCCESS':
      return action.rqs
    default:
      return state
  }
}
