import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'addSchoolReview',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const AddSchoolReview = require('./containers/AddSchoolReviewContainer').default
      const reducer = require('./modules/addSchoolReview').default

      injectReducer(store, { key: 'addSchoolReview', reducer })

      cb(null, AddSchoolReview)

    }, 'addSchoolReview')
  }
})
