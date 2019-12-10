import uuid from 'uuid';
import AllPage from './components/pages/AllPage'
import SearchPage from './components/pages/SearchPage'
import TodayPage from './components/pages/TodayPage'
import MoviePage from './components/pages/MoviePage'

const routes = [
  {
    id: uuid(),
    name: 'Search',
    path: "/search",
    component: SearchPage
  },
  {
    id: uuid(),
    name: 'Today',
    path: "/today",
    component: TodayPage
  },
  {
    id: uuid(),
    name: 'All Movies',
    path: "/all",
    component: AllPage
  },
  {
    id: uuid(),
    name: 'Movie',
    path: "/movie/:id",
    component: MoviePage,
    hidden: true
  }
]

export default routes;
