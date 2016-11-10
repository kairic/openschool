import React from 'react'
import classes from './Footer.scss'

export const Footer = () => (
    <footer>
      <ul>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="#">Legal</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Cookies</a></li>
        <li><a href="#">Terms of use</a></li>
      </ul>
      <p className="pull-xs-right text-muted">© 2016 Open School</p>
    </footer>
)

export default Footer
