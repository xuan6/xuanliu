import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Nav = () => (

<div class="nav"
style={{
    background: `rgba(0,0,0,0)`,
    margin: `0 auto 1.45rem auto`,
    maxWidth:`80%`,
    fontSize:`2rem`,
    color:`#ffffff`

  }}>
    
    <div class="navb-start"
    style={{
        float:`left`
      }}>
        <Link to='/' class="nav-item">
        Xuan Liu
        </Link>
    </div>
    <div class="nav-end"
    style={{
        float:`right`
      }}>
      <Link to='/' class="nav-item">
      Projects
      </Link>
      <Link to='/about' class="nav-item">
      About
      </Link>
    </div>
</div>
)

export default Nav