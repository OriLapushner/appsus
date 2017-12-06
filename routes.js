'use strict'
import HomePage from './pages/HomePage.js'
import MapsApp from './pages/MapsApp.js'
import EmailApp from './pages/EmailsApp.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/maps',
        component: MapsApp
    },
    {
        path: '/emails',
        component: EmailApp
    }   
];

export default routes;