import { formatDate } from '../util'

export function defaultRQ(state = { value: 66.66, date: formatDate(new Date()) }, action){
  switch(action.type){
    case 'DEFAULT_RQ_CHANGED':
      return Object.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}
