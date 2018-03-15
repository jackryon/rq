export const adminUsers = (state = [], action) => {
  switch(action.type) {
    case 'ADMIN_USERS':
      return action.users
    default:
      return state
  }
}
