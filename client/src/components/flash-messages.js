import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class FlashMessages extends React.Component {

  render() {
    return(
      <div id="flash-messages" className={ this.props.flashClass }>
        { this.props.flashMessage }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    flashMessage: state.flashMessage,
    flashClass: state.flashClass
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages)
