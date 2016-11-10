import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'school',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const School = require('./containers/SchoolContainer').default
      const reducer = require('./modules/school').default

      injectReducer(store, { key: 'school', reducer })

      cb(null, School)

    }, 'school')
  }
})
