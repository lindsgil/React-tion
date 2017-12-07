import React from 'react'
import { connect } from 'react-redux'
// import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'

class Header extends React.Component {

  render () {
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
