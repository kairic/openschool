import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div className={classes.header}>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
    {' · '}
    <Link to='/reviews' activeClassName={classes.activeRoute}>
      Reviews
    </Link>
    <Link to='/reviews' className={classes.addReview}>
      Add a review
    </Link>
    <Link to='/reviews' className={classes.switchLanguage}>
      English
    </Link>
    <Link to='/reviews' className={classes.signIn}>
      Sign in
    </Link>
  </div>
)

export default Header
