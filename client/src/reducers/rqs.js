const rQs = (state = [], action) => {
  switch(action.type){
    case 'someType':
      return [
        ...state,
        {
          id: "something"
        }
      ]
    default:
      return state
  }
}

export default rQs
