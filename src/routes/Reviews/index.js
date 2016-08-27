import { injectReducer } from '../../store/reducers'

export default (store) => ({  
  path: 'reviews',
  getComponent (nextState, next) {
    require.ensure([
      './containers/ReviewsContainer',
      './modules/reviews'
    ], (require) => {
      const Reviews = require('./containers/ReviewsContainer').default
      const reviewsReducer = require('./modules/reviews').default

      injectReducer(store, {
        key: 'reviews',
        reducer: reviewsReducer
      })

      next(null, Reviews)
    })
  }
})
