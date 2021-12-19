import * as React from "react"

const Footer = () => (
    <footer className='container'>
    © {new Date().getFullYear()} Design and Code by Xuan Liu. 
    Built with React & 
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>.
  </footer>
)

export default Footer
