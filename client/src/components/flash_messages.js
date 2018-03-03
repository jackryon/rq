import React from 'react'

class FlashMessages extends React.Component {

  render(){
    <div id="flash-messages">
      { this.props.msg }
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    msg: state.msg
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages)
