import { formatDate } from '../util'

let defaultState = {
  hr: 132,
  pace: '9:30',
  date: formatDate(new Date())
}

export const defaultHRData = (state = defaultState, action) => {
  switch(action.type){
    case 'DEFAULT_HR_DATA_CHANGED':
      return Object.assign({}, state, { [action.name]: action.value })
    default:
      return state
  }
}
