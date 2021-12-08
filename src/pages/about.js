import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles.css'

const NotFoundPage = () => (
  <Layout>
  <Seo title="About" />
  <div className='container about'>
    <h1>Hi, this is Xuan Liu.</h1>
  </div>
  </Layout>
)

export default NotFoundPage
