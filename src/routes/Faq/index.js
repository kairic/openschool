import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'faq',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Faq = require('./containers/FaqContainer').default
      const reducer = require('./modules/faq').default

      injectReducer(store, { key: 'faq', reducer })

      cb(null, Faq)

    }, 'faq')
  }
})
