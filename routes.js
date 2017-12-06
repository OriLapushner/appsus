'use strict'
import HomePage from './pages/HomePage.js'
import PlacesPage from './pages/PlacesPage.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/places',
        component: PlacesPage
    }
   

];

export default routes;