'use strict'
import HomePage from './pages/HomePage.js'
import MapsApp from './pages/MapsApp.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/maps',
        component: MapsApp
    }   
];

export default routes;