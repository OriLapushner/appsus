'use strict'
import EmailService from '../services/EmailService.js'
import EmailPrev from './EmailPreview.js' 

export default {

    template: `
                <div>
                <input type="text">
                <button>arrange by date</button>
                <button>newest first</button>
                <email-prev v-for="mail in mails" :mail="mail" class="email-prev"></email-prev>
                </div>
    `,
    data() {
        return {
            mails: null

        }
    },
    created(){
        EmailService.getMails()
        .then(mails =>
            this.mails = mails)
    },
    components: {
        EmailPrev
    }
}



