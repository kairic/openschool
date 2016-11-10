import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'addInterviewReview',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const AddInterviewReview = require('./containers/AddInterviewReviewContainer').default
      const reducer = require('./modules/addInterviewReview').default

      injectReducer(store, { key: 'addInterviewReview', reducer })

      cb(null, AddInterviewReview)

    }, 'addInterviewReview')
  }
})
