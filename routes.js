'use strict'
import HomePage from './pages/HomePage.js'
import EmailsPage from './pages/EmailsPage.js'

const routes = [
    {
        path: '/',
        component: HomePage
    }, 
    {
        path: '/emails',
        component: EmailsPage
    }
   

];

export default routes;