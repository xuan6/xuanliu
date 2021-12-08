import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <div className='container is-fluid'>
  <nav class='navbar is-transparent is-fixed-top' role='navigation' aria-label='main navigation'>

      <div className='navbar-start'>
        <a className='navbar-item'><Link to='/' target='_blank'>{siteTitle}</Link></a>
      </div>
      <div className='navbar-end'>
        <a className='navbar-item' href='https://drive.google.com/file/d/1eTQO5ls8TMGJsOGg3l1oIxATCj1_HU89/view?usp=sharing' target='_blank'>Resume</a>
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
