import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className='container is-fluid'>
  <nav class='navbar is-transparent is-fixed-top' role='navigation' aria-label='main navigation'>

      <div className='navbar-start'>
        <h4 className='navbar-item'><Link to="/">{siteTitle}</Link></h4>
      </div>
      <div className='navbar-end'>
        <h4 className='navbar-item'><Link to="/">Work</Link></h4>
        <h4 className='navbar-item'><Link to="/about">About</Link></h4>
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
