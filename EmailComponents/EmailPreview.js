import EmailService from '../services/EmailService.js'
import EventBusService from '../services/EventBusService.js'
export default { 
    
    template : `
                <div @click ="selectMail(mail)">
                <button @click="deleteMail(mail.id)">delete</button>
                <input type ="checkbox">
                    {{mail.title}}
                    {{mail.sentBy}}
                </div>
    `,
    props: ['mail'],
    data(){
        return{
            
        }

    },
    methods:{
        selectMail(mail){
            EventBusService.$emit('eventPassed', mail)
            console.log('select mail event was fired')
        },
        deleteMail: EmailService.deleteMail
    }
    
}


