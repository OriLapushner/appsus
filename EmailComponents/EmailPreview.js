
import EventBusService from '../services/EventBusService.js'
export default { 
    
    template : `
                <div @click ="selectMail(mail)">
                <input type ="checkbox" @click="updateValueStatus(mail.id)">
                    {{mail.title}}
                    {{mail.sentBy}}
                </div>
    `,
    props: ['mail'],
    data(){
        return{
            checked : false
        }

    },
    methods:{
        selectMail(mail){
            EventBusService.$emit('mailSelected', mail)
            // console.log('select mail event was fired')
        },
        updateValueStatus(mailId){
            this.checked = !this.checked
            EventBusService.$emit('mailChecked', mailId)
            // console.log(mailId,'is now:',this.checked)
            // this.checked[id] = !this.checked[id]
        }
    }
    
}


