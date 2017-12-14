import React from 'react'
import { connect } from 'react-redux'
// import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'

class Header extends React.Component {

  constructor () {
    super()
    this.state = {
      width: window.innerWidth
    }

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
    this.showNav = this.showNav.bind(this)
  }

  componentWillMount () {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  // remove listener when component isnt mounted anymore
  componentWillUnMount () {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange () {
    this.setState({ width: window.innerWidth })
  }

  showNav () {
    let linksEl = document.querySelector('.mobile-menu')
    if (linksEl.style.display === 'none') {
      linksEl.style.display = 'block'
    } else {
      linksEl.style.display = 'none'
    }
  }

  render () {
    const { width } = this.state
    const isMobile = width <= 800
    if (isMobile) {
      return (
        <header>
          <ul>
            <Link to='/'>
              <li className='header-logo' />
            </ Link>
          </ul>
          <button type='button' name='button' onClick={this.showNav} className='hamburger-button menu-icon'>&#9776;</button>
          <nav className='hamburger-menu-list'>
            <ul className='mobile-menu'>
              <li><a href='https://nwfilmforum.org/events/future-is-zero/' className='header-ticket' target='_blank'>TICKETS</a></li>
              <li><a href='http://thefutureis0.bigcartel.com/' className='header-merch' target='_blank'>MERCH</a></li>
              <li><Link to='/presspage' className='header-press'>PRESS</ Link></li>
              <li><Link to='/vids' className='header-vids'>HIT CLIPS</ Link></li>
              <li><Link to='/halloffame' className='header-past-shows'>HALL OF FAME</ Link></li>
              <li><a href='tel:+1-844-666-8349' className='header-phone'>RING RING</a></li>
            </ul>
          </nav>
        </header>
      )
    } else {
      return (
        <header>
          <ul>
            <Link to='/'>
              <li className='header-logo' />
            </ Link>
          </ul>
          <ul className='menu'>
            <li><a href='https://nwfilmforum.org/events/future-is-zero/' className='header-ticket' target='_blank'>TICKETS</a></li>
            <li><a href='http://thefutureis0.bigcartel.com/' className='header-merch' target='_blank'>MERCH</a></li>
            <li><Link to='/presspage' className='header-press'>PRESS</ Link></li>
            <li><Link to='/vids' className='header-vids'>HIT CLIPS</ Link></li>
            <li><Link to='/halloffame' className='header-past-shows'>HALL OF FAME</ Link></li>
          </ul>
        </header>
      )
    }
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
}

Header.contextTypes = {
  router: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
