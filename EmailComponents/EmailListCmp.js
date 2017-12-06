'use strict'
import emailService from '/..EmailService.js'


export default { 
    
    template : `
                <div>
                    {{email.title}}
                    {{email.sentBy}}
                </div>
    `,
    props: ['email'],
    data(){
        return {
            mails: emailService.mails 
                
        }
    }

    }

    