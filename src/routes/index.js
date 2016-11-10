import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import Faq from './Faq'
import School from './School'
import HomeView from './HomeView'
import AddReviewRoute from './AddReview'
import CompletedReviewRoute from './CompletedReview'
import AddSchoolReviewRoute from './AddSchoolReview'
import AddInterviewReviewRoute from './AddInterviewReview'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    HomeView(store),
    Faq(store),
    School(store),
    AddReviewRoute(store),
    AddSchoolReviewRoute(store),
    CompletedReviewRoute(store),
    AddInterviewReviewRoute(store)
  ]
})

export default createRoutes
