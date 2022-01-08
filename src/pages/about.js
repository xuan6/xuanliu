import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles.css'

const NotFoundPage = () => (
  <Layout>
  <Seo title="About" />
  <div className='container'>
    <div className='about'>
    <h3>Xuan Liu (she/her) </h3>
    <h4>Design Engineering | Amazon Device Design</h4>
    <p>xuanliux93 [at] gmail [dot] com<br/> <a href='https://drive.google.com/file/d/1eTQO5ls8TMGJsOGg3l1oIxATCj1_HU89/view'>resume</a></p>
    <p>People often call Xuan Designer by title, but Xuan focuses more on the Engineering side in a nutshell.</p>
    <p>While typical Product Designers spend days making creative crafts, Xuan, as a System Designer, reviews design from the technical lens, systematizes designs with engineering patterns, and builds scalable, component-based design systems to facilitate design and development process.</p>
    <p>Xuan brings design to life with proof of technical feasibility, scalability, accessibility, and localization compatibility. Xuan is also experienced in exploring short-term alternatives and long-term strategies to meet design intents under technical constraints and tight timelines.</p>
    <p>Working closely with product and engineering teams makes Xuan an efficient collaborator and communicator. Xuan guides product teams to identify and apply reusable patterns and create products with consistency. Xuan also partners with engineering teams through documentation, office hours, and code reviews to ensure the parity between design and development.</p>
    
    </div>
  </div>
  </Layout>
)

export default NotFoundPage
