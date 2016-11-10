import React from 'react'
import classes from './AddInterviewReview.scss'
import SchoolLogoImage from './assets/dbs_logo.png'

export const AddInterviewReview = () => (
  <div className="container-fluid p-x-0">
    <form>
    <div className="row">
    </div>
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8 text-xs-center">
        <h4>WRITE AN INTERVIEW REVIEW</h4>
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className="row">
      <div className="col-md-2"></div>
      <div className={"col-md-8 media " + classes['os-col-centered']}>
        <div className="media-left media-middle">
          <a href="http://www.dbs.edu.hk/">
            <img className="media-object" src={SchoolLogoImage} height="70" width="70" />
          </a>
        </div>
        <div className="media-body">
          <p className={classes['os-school-info']}>Diocesan Boys School</p>
          <p className={classes['os-school-info2']}>131 Argyle Street, Mong Kok</p>
          <p className={classes['os-school-info2']}>Kowloon</p>
          <p className={classes['os-school-info']}>Year: 2011</p>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className={"col-md-8 text-xs-center " + classes['os-subtitle']}>
        INTERVIEW DIFFICULT
        <input id="interview-rating" name="interview-rating" className="rating rating-loading" data-show-clear="false" data-show-caption="true" />
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <label for="title-textarea-input" className={classes['os-question-header']}>Title</label>
        <textarea className={"form-control " + classes['os-title-answer']} id="title-textarea-input" rows="1">Write here...</textarea>
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <label for="process-textarea-input" className={classes['os-question-header']}>Describe the interview process</label>
        <textarea className={"form-control " + classes['os-answer']} id="process-textarea-input" rows="6">Write here...</textarea>
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <label for="question1-textarea-input" className={classes['os-question-header']}>Interview questions</label>
        <p>
          <textarea className={"form-control " + classes['os-interview-questions-answer']} id="question1-textarea-input" rows="3">Q: What was one thing that they asked?</textarea>
        </p>
        <p>
          <textarea className={"form-control " + classes['os-interview-questions-answer']} id="question1-textarea-input" rows="3">A: How did you answer that question? (optional)</textarea>
        </p>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className={"col-md-8 " + classes['os-question-header']}>
        <p>Did you get a placement?</p>
        <div className="btn-toolbar" role="toolbar">
          <input type="button" value="Yes" className="btn btn-outline-info" />
          <input type="button" value="Yes, but declined" className="btn btn-outline-info" />
          <input type="button" value="No" className="btn btn-outline-info" />
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className={"col-md-8 " + classes['os-question-header']}>
        <p>How long was the entire process?</p>
        <div className="input-group">
          <input type="text" className="form-control" />
          <div className="input-group-btn">
            <button type="button" className="btn btn-outline-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Days
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">Days</a>
              <div role="separator" className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Months</a>
              <div role="separator" className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Years</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className={"col-md-8 " + classes['os-question-header']}>
        <p>When did you have the interview?</p>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className={"col-md-8 " + classes['os-question-header']}>
        <p>Select the items required during the interview process</p>
      </div>
      <div className="col-md-2"></div>
    </div>


    <div className={"row " + classes['os-submit-row']}>
      <div className="col-md-2"></div>
      <div className={"col-md-8 text-xs-center"}>
        <a href="/completedReview" className={"btn btn-default " + classes['btn-submit']}>Submit</a>
      </div>
      <div className="col-md-2"></div>
    </div>
    </form>
  </div>
)

export default AddInterviewReview
