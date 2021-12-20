import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className='container is-fluid'>
  <nav class='navbar is-fixed-top is-transparent' role='navigation' aria-label='main navigation'>
      <div className='navbar-menu is-active'>
      <div className='navbar-start'>
        <a className='navbar-item'><Link to='/' target='_blank'>{siteTitle}</Link></a>
      </div>
      <div className='navbar-end'>
        <a className='navbar-item'><Link to='/about' target='_blank'>About</Link></a>
      </div>
      </div>

  </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
