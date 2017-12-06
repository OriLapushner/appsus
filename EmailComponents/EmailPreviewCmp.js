import mailService from '../EmailService.js'
export default { 
    
    template : `
                <div>
                    {{email.title}}
                    {{email.sentBy}}
                </div>
    `,
    props: ['email'],
    data(){
        return{
            mailList:mailService.mailList
        }

    },
    
}


