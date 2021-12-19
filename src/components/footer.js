import * as React from 'react'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import {FaGithubSquare} from '@react-icons/all-files/fa/FaGithubSquare'
import {MdEmail} from '@react-icons/all-files/md/MdEmail'

const Footer = () => (
    <footer className='container'>
        <div className='footer-text'>© {new Date().getFullYear()} Design and Code by Xuan Liu. 
        Built with React & Gatsby.
        </div>
        <div className='footer-icon'>
            <a href='https://www.linkedin.com/in/xuanliux/' target='_blank'>
                <FaLinkedin size='1.5rem'/>
            </a>
            <a href='https://github.com/xuan6' target='_blank'>
                <FaGithubSquare size='1.5rem'/>
            </a>
            <a href='mailto:xuanliux93@gmail.com'>
                <MdEmail size='1.5rem'/>
            </a>
        </div>
  </footer>
)

export default Footer
