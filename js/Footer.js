import React from 'react'
import {connect} from 'react-redux'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <ul className='menu'>
          <li><div className='footer-social-twit' /></li>
          <li><div className='footer-social-yt' /></li>
        </ul>
        <h1 className='phone-number'>
          1-844-666-TFIZ
        </h1>
        <ul className='menu'>
          <li><div className='footer-social-fb' /></li>
          <li><div className='footer-social-ig' /></li>
        </ul>
      </footer>
    )
  }
}

const {func} = React.PropTypes
Footer.propTypes = {
  dispatch: func
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Footer)
