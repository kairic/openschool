import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'completedReview',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const CompletedReview = require('./containers/CompletedReviewContainer').default
      const reducer = require('./modules/completedReview').default

      injectReducer(store, { key: 'completedReview', reducer })

      cb(null, CompletedReview)

    }, 'completedReview')
  }
})
