'use strict'
import EmailService from '../services/EmailService.js'
import EmailPrev from './EmailPreview.js' 

export default {

    template: `
                <div>
                <email-prev v-for="mail in mails" :mail="mail"></email-prev>
                </div>
    `,
    props: ['email'],
    data() {
        return {
            mails: EmailService.getMails()

        }
    },
    components: {
        EmailPrev
    }
}



