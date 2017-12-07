'use strict'
import EmailService from '../services/EmailService.js'
import EmailPrev from './EmailPreview.js' 
import EmailCompose from './EmailCompose.js'
export default {

    template: `
                <div class ="list-container">
                <email-prev v-for="mail in mails" :mail="mail" class="email-prev" :key="mail.id"></email-prev>
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
