import React from 'react'
import classes from './AddSchoolReview.scss'
import SchoolLogoImage from './assets/dbs_logo.png'

export const AddSchoolReview = () => (
  <div className="container-fluid p-x-0">
    <form>
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="mx-auto" style={{"width": "400px"}}>
          <p className={classes['text-title']}>WRITE A SCHOOL REVIEW</p>
        </div>
        <div className="mx-auto" style={{"width": "360px"}}>
          <div className="media ">
            <div className="media-left">
              <a className="pull-left" href="http://www.dbs.edu.hk/">
                <img className="media-object" src={SchoolLogoImage} height="70" width="70" />
              </a>
            </div>
            <div className="media-body">
                <h5 className="media-heading">Diocesan Boys School <a className={classes['text-school-info-link']} href="#">change</a></h5>
                <span className={classes['text-school-info2 ']}>131 Argyle Street, Mong Kok<br/>Kowloon</span>
                <p className={classes['text-school-info']}>Last school year: 2011 <a className={classes['text-school-info-link']} href="#">change</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className="row">
      <div className="col-md-8"><p></p></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className={"col-md-8 text-xs-center " + classes['os-subtitle']}>
        OVERALL RATE
        <input id="overall-rating" name="overall-rating" className="rating rating-loading" data-show-clear="false" data-show-caption="true" />
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <label htmlFor="title-textarea-input" className={classes['os-question-header']}>Title</label>
        <textarea wrap="off" className={"form-control " + classes['os-answer']} id="title-textarea-input" rows="2" placeholder="Write here..."></textarea>
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <label htmlFor="pros-textarea-input" className={classes['os-question-header']}>Pros</label>
        <textarea wrap="off" className={"form-control " + classes['os-answer']} id="pros-textarea-input" rows="5" placeholder="Share some of the best reasons to study at XXX school" />
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <label htmlFor="cons-textarea-input" className={classes['os-question-header']}>Cons</label>
        <textarea wrap="off" className={"form-control " + classes['os-answer']} id="cons-textarea-input" rows="5" placeholder="Share some of the downsides of studying at XXX school" />
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className={"col-md-8 " + classes['os-question-header']}>
        <p>Rate the following aspects of the school</p>
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className={"col-md-4 " + classes['os-answer']}>
        Feature 1
        <input id="feature1-rating" name="feature1-rating" className="rating rating-loading" data-show-clear="false" data-show-caption="false" />
      </div>
      <div className={"col-md-4 " + classes['os-answer']}>
        Feature 2
        <input id="feature2-rating" name="feature2-rating" className="rating rating-loading" data-show-clear="false" data-show-caption="false" />
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className={"col-md-4 " + classes['os-answer']}>
        Feature 3
        <input id="feature3-rating" name="feature3-rating" className="rating rating-loading" data-show-clear="false" data-show-caption="false" />
      </div>
      <div className={"col-md-4 " + classes['os-answer']}>
        Feature 4
        <input id="feature4-rating" name="feature4-rating" className="rating rating-loading" data-show-clear="false" data-show-caption="false" />
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className={"row " + classes['os-background']}>
      <div className="col-md-2"></div>
      <div className={"col-md-4 " + classes['os-answer']}>
        Feature 5
        <input id="feature5-rating" name="feature5-rating" className="rating rating-loading" data-show-clear="false" data-show-caption="false" />
      </div>
      <div className={"col-md-4 " + classes['os-answer']}>
        Feature 6
        <input id="feature6-rating" name="feature6-rating" className="rating rating-loading" data-show-clear="false" data-show-caption="false" />
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

export default AddSchoolReview
