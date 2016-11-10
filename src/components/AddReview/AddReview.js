import React from 'react'
import classes from './AddReview.scss'
import SchoolLogoImage from '../AddInterviewReview/assets/dbs_logo.png'

export const AddReview = (props) => (
  <div id="pt-main" className="container-fluid p-x-0 ">
    <div className="row"></div>
    <div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 text-xs-center">
          <p className={classes['title']}>
            WRITE A REVIEW
          </p>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <p className={classes['subtitle']}>
            Write one review to get unlimited access
          </p>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-7">
          <p className={classes['normal']}>
            Fanhok has a lot of reviews shared by students, parents and teachers. It only takes a few minutes to
            get unlimited access to all our content for 12 months.
          </p>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-5">
          <div className={"form-group " + classes['normal']}>
            <label for="school-name-text-input">NAME*</label>
            <input type="text" className={"form-control " + classes['textbox-school-name']} id="school-name-text-input" placeholder="Type school Name" />
          </div>
        </div>
        <div className="col-md-2">
          <div className={"form-group " + classes['normal']}>
            <label for="school-year-input">LAST SCHOOL YEAR*</label>
            <select className={"form-control " + classes['selectionbox-school-year']} id="school-year-input">
              <option className={classes['selectionbox-school-year-dropdown']} selected>Select year</option>
              <option className={classes['selectionbox-school-year-dropdown']} value="2015">2015</option>
              <option className={classes['selectionbox-school-year-dropdown']} value="2014">2014</option>
              <option className={classes['selectionbox-school-year-dropdown']} value="2013">2013</option>
            </select>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <p className={classes['normal']}>
            WHAT WOULD YOU LIKE TO SHARE*
          </p>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="btn-toolbar" role="toolbar">
            <input type="button" value="The School" className={"btn btn-default " + classes['btn-review-type']} />
            <input type="button" value="The Interview" className={"btn btn-default " + classes['btn-review-type']} />
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <p className={classes['text-mandatory']}>
            *Mandatory fields
          </p>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className={"row " + classes['os-background']}>
        <div className="col-md-3"></div>
        <div className={"col-md-6 text-xs-center"}>
          <a href="/AddSchoolReview" className={"btn btn-default " + classes['btn-next']}>Next</a>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  </div>
)

export default AddReview
