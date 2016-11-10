import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'homeView',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const HomeView = require('./containers/HomeViewContainer').default
      const reducer = require('./modules/homeView').default

      injectReducer(store, { key: 'homeView', reducer })

      cb(null, HomeView)

    }, 'homeView')
  }
})
