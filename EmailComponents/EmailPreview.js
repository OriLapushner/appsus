import EmailService from '../services/EmailService.js'
export default { 
    
    template : `
                <div>
                <button @click="deleteMail(mail.id)">delete</button>
                    {{mail.title}}
                    {{mail.sentBy}}
                </div>
    `,
    props: ['mail'],
    data(){
        return{
            mailList:EmailService.mailList
        }

    },
    methods:{
        deleteMail: EmailService.deleteMail
    }
    
}


