import request from 'superagent'

const rQService = store => next => action => {
  next(action)

  switch (action.type) {
    case 'GET_RQS':
      request
        .get(process.env.REACT_APP_API_ENDPOINT)
        .end((err, res) => {
          if(err){
            return next({
              type: 'GET_RQS_ERROR',
              err
            })
          }

          const data = JSON.parse(res.text)
          next({
            type: 'GET_RQS_RECEIVED',
            data
          })
        })
      break

    default:
      break
  }
}

export default rQService
