import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles.css'
import profileImage from '../images/xuan-liu-profile.jpg'

const About = () => (
  <Layout>
  <Seo title="About" />
  <div className='container'>
    <div className='about'>
      <div className='profile-header'>
        <h3>Xuan Liu (she/her) </h3>
        <h4>Design System | Amazon Device Design</h4>
        <p>xuanliux93 [at] gmail [dot] com<br/> <a href='https://drive.google.com/file/d/11kgEeI1qJTPYFyxZuZtUi9Kq5cQHruSD/view?usp=sharing'>resume</a></p>
      </div>
      <div className='profile-body'>
        <div className='profile-text'>
          <p>As a System Designer, Xuan reviews design from the technical lens, systematizes designs with engineering patterns, and builds scalable, component-based design systems to facilitate design and development process.</p>
          <p>Xuan brings design to life with proof of technical feasibility, scalability, accessibility, and localization compatibility. Xuan is also experienced in exploring short-term alternatives and long-term strategies to meet design intents under technical constraints and tight timelines.</p>
          <p>Working closely with product and engineering teams makes Xuan an efficient collaborator and communicator. Xuan guides product teams to identify and apply reusable patterns and create products with consistency. Xuan also partners with engineering teams through documentation, office hours, and code reviews to ensure the parity between design and development.</p>
          <br/>
          <p>Outside work, you can find Xuan busy in cooking or hiking. Xuan also runs a <a href='https://meowshiba.com'>blog</a> (writtrn in chinese) with her partner, documenting their travle expereinces.</p>
        </div>
        <div className='profile-img'>
          <img src={profileImage} alt='profile image' />
        </div>
      </div>
    </div>
  </div>
  </Layout>
)

export default About
