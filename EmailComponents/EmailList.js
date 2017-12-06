'use strict'
import EmailService from '../services/EmailService.js'
import EmailPrev from './EmailPreview.js' 
import EmailCompose from './EmailCompose.js'
export default {

    template: `
                <div>
                <button @click="composeShown = !composeShown">composeMail</button>
                <input type="text" placeholder="search email">
                <button>arrange by date</button>
                <button>newest first</button>
                <email-prev v-for="mail in mails" :mail="mail" class="email-prev"></email-prev>
                <email-compose v-show="composeShown"></email-compose>
                </div>
    `,
    data() {
        return {
            mails: null,
            composeShown: false

        }
    },
    created(){
        EmailService.getMails()
        .then(mails =>
            this.mails = mails)
    },
    components: {
        EmailPrev,
        EmailCompose
    },
    // methods:{
    //     searchMailsByTxt: searchMailsByTxt.EmailService
    // }
}
