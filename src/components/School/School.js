import React from 'react'
import classes from './School.scss'
import TopImage from './assets/school.png'
import LineImage from './assets/line.png'
import Line2Image from './assets/line2.png'

export const School = () => (
  <div className="container-fluid p-x-0">
    <div className="row">
      <div>
        <img className={classes['img-at-top']} src={TopImage} alt="" />
      </div>
    </div>
    <div className={"row " + classes['img-at-top-background']}>
      <div className="col-md-1"/>
      <div className="col-md-10">
        <p className={classes['text-header']}>NAME OF THE CENTRE</p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row">
      <p></p>
    </div>
    <div className="row">
      <p></p>
    </div>
    <div className="row">
      <div className="col-md-1"/>
      <div className="col-md-3  text-xs-center">
        <p className={classes['text-icon']}>Overview</p>
      </div>
      <div className="col-md-4  text-xs-center">
        <p className={classes['text-icon']}>Reviews</p>
      </div>
      <div className="col-md-3  text-xs-center">
        <p className={classes['text-icon']}>Interview</p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <img className={classes['img-line']} src={LineImage} alt="" />
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row ">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <p className={classes['text-title']}>VISITORS FAQ</p>
        <p className={classes['text-question']}>Question 1.</p>
        <p className={classes['text-answer']}>
        Answer question 1. Faketextfornow. unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
        </p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row ">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <p className={classes['text-question']}>Question 2.</p>
        <p className={classes['text-answer']}>
        Answer question 2. Faketextfornow. unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
        </p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row ">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <p className={classes['text-question']}>Question 3.</p>
        <p className={classes['text-answer']}>
        Answer question 3. Faketextfornow. unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
        </p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <img className={classes['img-line']} src={Line2Image} alt="" />
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row ">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <p className={classes['text-title']}>VISITORS FAQ</p>
        <p className={classes['text-question']}>Question 1.</p>
        <p className={classes['text-answer']}>
        Answer question 1. Faketextfornow. unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
        </p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row ">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <p className={classes['text-question']}>Question 2.</p>
        <p className={classes['text-answer']}>
        Answer question 2. Faketextfornow. unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
        </p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row ">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <p className={classes['text-question']}>Question 3.</p>
        <p className={classes['text-answer']}>
        Answer question 3. Faketextfornow. unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
        </p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <img className={classes['img-line']} src={Line2Image} alt="" />
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row ">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <p className={classes['text-title']}>VISITORS FAQ</p>
        <p className={classes['text-question']}>Question 1.</p>
        <p className={classes['text-answer']}>
        Answer question 1. Faketextfornow. unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
        </p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row ">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <p className={classes['text-question']}>Question 2.</p>
        <p className={classes['text-answer']}>
        Answer question 2. Faketextfornow. unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
        </p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row ">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <p className={classes['text-question']}>Question 3.</p>
        <p className={classes['text-answer']}>
        Answer question 3. Faketextfornow. unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
        </p>
      </div>
      <div className="col-md-1"/>
    </div>
    <div className="row">
      <div className="col-md-1"/>
      <div className="col-md-10">
        <img className={classes['img-line']} src={Line2Image} alt="" />
      </div>
      <div className="col-md-1"/>
    </div>
  </div>
)

export default School
