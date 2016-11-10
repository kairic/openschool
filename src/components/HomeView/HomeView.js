import React from 'react'
import SchoolPlaygroundImage from './assets/school-playground.png'
import HomeBusinessImage from './assets/home_business.png'
import classes from './HomeView.scss'

export const HomeView = (props) => (
  <div className="container-fluid p-x-0">
    <div className="row">
      <img className={classes['img-at-top']} src={SchoolPlaygroundImage} alt="" />
    </div>
    <div className={"row " + classes['img-at-top-background']}>
      <div className="col-md-12 text-xs-center">
        <p className={classes['text-slogan']}>THIS IS OUR SLOGAN</p>
        <p className={classes['text-sub-slogan']}>THIS IS OUR SLOGAN</p>
      </div>
    </div>
    <div className={"row " + classes['img-at-top-background']}>
      <div className="col-md-3"/>
      <div className="col-md-6">
        <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="Type the school name" />
            <span className="input-group-btn">
              <button className={"btn btn-default " + classes['btn-explore']} type="button">Explore</button>
            </span>
        </div>
      </div>
      <div className="col-md-3"/>
    </div>
    <div className={"row " + classes['img-at-top-background']}>
      <div className="col-md-12 text-xs-center">
        <p></p>
      </div>
    </div>
    <div className="row ">
      <div className="col-md-12 text-xs-center">
        <p className={classes['text-community']}>JOIN THE COMMUNITY</p>
        <p className={classes['text-community-small']}>By Creating an account, I agree to FanHok
        <a href="#"> Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>
      </div>
    </div>
    <div className="row ">
      <div className="col-md-3"/>
      <div className="col-md-6 text-xs-center">
        <div className={"btn-toolbar text-center " + classes['center-btn-toolbar']} role="toolbar">
          <button type="button" className={"btn " + classes['facebook-button']}>Sign up with Facebook</button>
          <button type="button" className={"btn " + classes['google-button']}>Sign up with Google</button>
        </div>
      </div>
      <div className="col-md-3"/>
    </div>
    <div className="row ">
      <div className="col-md-12 text-xs-center">
        <p className={classes['text-community-small']}>or join using <a href="#">your email address</a></p>
      </div>
    </div>
    <div className="row ">
      <img className={classes['img-at-bottom']} src={HomeBusinessImage} alt="" />
    </div>
    <div className="row ">
      <div className="col-md-12 text-xs-center">
        <p className={classes['text-write-review']}>WRITE A REVIEW AND HELP OTHER PARENTS</p>
        <p className={classes['text-write-review2']}>
            Do you want to share your experience with other parents? <br/>
            Have you experienced any bla bla bla bla  bla bla bla bla <br/>
            bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla  <br/>
        </p>
      </div>
    </div>
    <div className="row ">
      <div className="col-md-12 text-xs-center">
        <a href="/AddReview" className={"btn btn-default " + classes['btn-write-review']}>Write a review</a>
      </div>
    </div>
    <div className={"row " + classes['row-with-top-padding']}>
      <div className="col-md-12 text-xs-center">
        <p></p>
      </div>
    </div>
  </div>
)

export default HomeView
