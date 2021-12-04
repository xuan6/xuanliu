import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


import "../pages/styles.scss"

const Nav = () => (

<nav class="navbar" role="navigation" aria-label="main navigation"
style={{
    background: `rgba(0,0,0,0)`,
    margin: `0 auto 1.45rem auto`,
    maxWidth:`80%`,
    fontSize:`2rem`,
    color:`#ffffff`

  }}>
    <div class="navbar-menu">
        <div class="navbar-start">
            <div class="navbar-item">
                <Link to='/' class="navbar-item">
                Xuan Liu
                </Link>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <Link to='/' class="navbar-item">
                Projects
                </Link>
                <Link to='/about' class="navbar-item">
                About
                </Link>
            </div>
        </div>
    </div>
</nav>
)

export default Nav