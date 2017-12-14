import React from 'react'
import {connect} from 'react-redux'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <ul className='menu'>
          <li>
            <a href='https://twitter.com/TheFutureis0' target='_blank'>
              <div className='footer-social-twit' />
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/channel/UC04a5WxS0yDRuAcqpig3nvQ' target='_blank'>
              <div className='footer-social-yt' />
            </a>
          </li>
        </ul>
        <h1 className='phone-number'>
          1-844-666-TFIZ
        </h1>
        <ul className='menu'>
          <li>
            <a href='https://www.facebook.com/thefutureis0/' target='_blank'>
              <div className='footer-social-fb' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/thefutureis0/' target='_blank'>
              <div className='footer-social-ig' />
            </a>
          </li>
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
