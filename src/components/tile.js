import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const tileTitle = 'hi'

const Tile = () => (
    
    <div
      style={{
        margin: `0 1rem`,
        maxWidth: 960,
        padding: `1rem 1rem`,
        width:'360px',
        height: '180px',
        backgroundColor:'green',
        borderRadius:'8px',
      }}
    >
      <h1>
        <Link
          to="/page-3"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Go to {tileTitle}
        </Link>
      </h1>
      <p>Description go below</p>
    </div>
)


export default Tile
