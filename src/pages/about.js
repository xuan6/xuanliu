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
    <h4>Design Engineering team | Amazon Device Design</h4>
    <p>People often call Xuan Designer by title, but Xuan focuses more on the Engineering side in a nutshell. If you are looking for a typical UX/UI Designer who is passionate about drawing wireframes and visually appealing mockups, you might want to back up and make a u-turn</p>
    <p>While typical designers spend days making creative crafts, Xuan reviews design from the technical lens, systematize designs with engineering patterns, and build scalable, component-based design systems to facilitate design and development process.</p>
    <p>Xuan brings design to life with proof of technical feasibility, scalability, accessibility, and localization compatibility. Xuan is also experienced in exploring short-term alternatives and long-term strategies to meet design intents under technical constraints and tight timelines.</p>
    <p>Working closely with product and engineering teams also makes Xuan a efficient collaborator and communicator. Xuan guides product teams to apply reusable patterns and create products with consistency. Xuan also partners with engineering teams through documentation, office hours, and code reviews to drive alignment and front-end fit and finish.</p>
    <p>Still wants to know more? Please check Xuan’s <a href='https://drive.google.com/file/d/1eTQO5ls8TMGJsOGg3l1oIxATCj1_HU89/view'>resume</a> for details or <a href='mailto:xuanliux93@gmail.com'>drop a line</a>. </p>
    <p>Thanks for stopping by! :D</p>
    </div>
  </div>
  </Layout>
)

export default NotFoundPage
