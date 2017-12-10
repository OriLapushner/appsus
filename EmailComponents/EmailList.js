'use strict'
import EmailService from '../services/EmailService.js'
import EmailPrev from './EmailPreview.js'
import EmailCompose from './EmailCompose.js'
import EventBusService from '../services/EventBusService.js'
export default {

    template: `
                <div class ="list-items">
                    <email-prev v-for="mail in mails" :mail="mail" :key="mail.id"></email-prev>
                </div>
    `,
    data() {
        return {
            composeShown: false,
            mails: null,
        }
    },
    created(){
        this.mailsChecked = {}
        this.mails = EmailService.getMails()
        
        EventBusService.$on('searchExecuted',(txt) =>{
            this.mails = EmailService.getMails().filter(mail => {
                if (mail.title.includes(txt)) return true
                if (mail.content.includes(txt)) return true
                if (mail.sentBy.includes(txt)) return true
                return false;
            })
        })
        EventBusService.$on('mailChecked',(id) => {
            // console.log('the wanted index is: ',index,'of element with id',id)
            if( id in this.mailsChecked) delete this.mailsChecked[id]
            else this.mailsChecked[id] = true; 
        })
        EventBusService.$on('deleteClicked',() => {
            console.log(this.mailsChecked)
            for(const key in this.mailsChecked){
                for (var i = 0; i < this.mails.length; i++) {
                    if(this.mails[i].id === +key){

                    this.mails.splice(i,1)
                        break;
                }
                }
                
            }
        })
        EventBusService.$on('markClicked', () =>{
            console.log('mark mails event was shot')
            for(const key in this.mailsChecked){
                for (var i = 0; i < this.mails.length; i++) {
                    if(this.mails[i].id === +key){
                        this.mails[i].isRead = true
                    }
                }
            }
        })
        EventBusService.$on('sortByDateClicked', ()=>{
            this.mails.sort((a,b) =>a.sentAt - b.sentAt)
        })
    },
    components: {
        EmailPrev,
        EmailCompose
    }
}

    // methods:{
    //     searchMailsByTxt: searchMailsByTxt.EmailService
    // }