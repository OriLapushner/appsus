import mailService from '../services/EmailService.js'
export default { 
    
    template : `
                <div>
                    {{mail.title}}
                    {{mail.sentBy}}
                </div>
    `,
    props: ['mail'],
    data(){
        return{
            mailList:mailService.mailList
        }

    },
    
}


