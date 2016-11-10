import React from 'react'
import classes from './Header.scss'
import LogoImage from './assets/logo.png'

export const Header = () => (
  <div>
    <div className="modal fade" id="loginModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className={"btn btn-lg btn-block " + classes['facebook-button']}>Login with Facebook</button>
            <button type="button" className={"btn btn-lg btn-block " + classes['google-button']}>Login with Google</button>
            <p className={classes['header-popup-line']}><span>or</span></p>
            <div className="form-group">
              <input className={"form-control " + classes['form-text']} id="loginEmail" placeholder="Email address" type="email" />
            </div>
            <div className="form-group">
              <input className={"form-control " + classes['form-text']} id="loginPassword" placeholder="Password" type="password" />
            </div>
            <p className={"float-xs-right " + classes['forgot-password-text']}><a href="#">Forgot password?</a></p>
            <button type="button" className={"btn btn-lg btn-block " + classes['signup-button']}>Login</button>
          </div>
          <div className="modal-footer">
            <p className={"float-xs-left " + classes['no-account-text']}>No account? <a href="#">Start here</a></p>
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="signupModal">
      <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className={"btn btn-lg btn-block " + classes['facebook-button']}>Sign up with Facebook</button>
              <button type="button" className={"btn btn-lg btn-block " + classes['google-button']}>Sign up with Google</button>
              <p className={classes['header-popup-line']}><span>or</span></p>
              <div className="form-group">
                <input className={"form-control " + classes['form-text']} id="signupEmail" placeholder="Email address" type="email" />
              </div>
              <div className="form-group">
                <input className={"form-control " + classes['form-text']} id="signupPassword" placeholder="Password" type="password" />
              </div>
              <p className={classes['signup-text']}>By Creating an account, I agree to Fanhok <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
              <button type="button" className={"btn btn-lg btn-block " + classes['signup-button']}>Sign up</button>
            </div>
          </div>
        </div>
    </div>

    <nav className="navbar navbar-full navbar-dark bg-inverse">
      <div className="collapse navbar-toggleable-xs" id="navbar-header">
        <div className="nav navbar-nav">
          <a className={"navbar-brand " + classes['header-navbar-brand']} href="/homeView">
            <img src={LogoImage} alt=""/>
          </a>
          <ul className={"nav navbar-nav " + classes['header-navbar-nav']}>
            <li className="nav-item active">
              <a className={"nav-link " + classes['header-item']} href="/school">School Reviews</a>
            </li>
            <li className="nav-item active">
              <a className={"nav-link " + classes['header-item']} href="/school">Interviews</a>
            </li>
            <li className="nav-item float-xs-right">
              <a className={"nav-link " + classes['header-item2']} href="#signupModal" data-toggle="modal" data-target="#signupModal">Sign up</a>
            </li>
            <li className="nav-item float-xs-right">
              <a className={"nav-link " + classes['header-item2']} href="#loginModal" data-toggle="modal" data-target="#loginModal">Login</a>
            </li>
            <li className="nav-item dropdown float-xs-right">
              <a className={"nav-link dropdown-toggle " + classes['header-item2']} href="http://example.com" id="responsiveNavbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">中文</a>
              <div className="dropdown-menu" aria-labelledby="responsiveNavbarDropdown">
                <a className="dropdown-item" href="#">English</a>
              </div>
            </li>
            <li className="nav-item float-xs-right">
              <a className={"btn btn-outline-secondary " + classes['header-item2']} href="/addReview">Write a review</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
