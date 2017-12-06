'use strict'

import myRoutes from './routes.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({routes : myRoutes})

new Vue({
    template: `
        <section>
                <h1>My App</h1> 
                <nav> 
                    <router-link to="/" exact>Home</router-link>
                    <router-link to="/emails" >Emails</router-link>
                    <router-link to="/maps" >Maps</router-link>
                </nav>
                <router-view></router-view>
                <footer>copyrights&copy; 2018</footer>            
        </section>
    `,
    created() {
        console.log('Vue App was created. Great success!');
    },
    router: myRouter,
}).$mount('#app')