'use strict'
import HomePage from './pages/HomePage.js'
import PlacesPage from './pages/PlacesPage.js'
import EmailsPage from './pages/EmailsPage.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/places',
        component: PlacesPage
    }, 
    {
        path: '/emails',
        component: EmailsPage
    }
   

];

export default routes;