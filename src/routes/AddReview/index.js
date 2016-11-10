import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'addReview',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const AddReview = require('./containers/AddReviewContainer').default
      const reducer = require('./modules/addReview').default

      injectReducer(store, { key: 'addReview', reducer })

      cb(null, AddReview)

    }, 'addReview')
  }
})
