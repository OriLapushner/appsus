'use strict'
import EmailService from '../services/EmailService.js'
import EmailPrev from './EmailPreview.js'
import EmailCompose from './EmailCompose.js'
import EventBusService from '../services/EventBusService.js'
export default {

    template: `
                <div class ="list-container">
                    <email-prev v-for="mail in mails" :mail="mail" class="email-prev" :key="mail.id"></email-prev>
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
            // var index = this.mailsChecked.findIndex(mailChecked => mailChecked.id === id)
            // console.log('the wanted index is: ',index,'of element with id',id)
            if( id in this.mailsChecked) delete this.mailsChecked[id]
            else this.mailsChecked[id] = true; 
            // console.log(this.mailsChecked);
            // if(index === -1){
            //     this.mailsChecked.push({
            //         id,
            //         value:true
            //     }
            //     )}
            // else this.mailsChecked[index].value = !this.mailsChecked[index].value
            // console.log('mails checked status is: ',this.mailsChecked)
        })
        EventBusService.$on('deleteClicked',() => {
            console.log(this.mailsChecked)
            var indexToDelete;
            for(const key in this.mailsChecked){
                for (var i = 0; i < this.mails.length; i++) {
                    if(this.mails[i].id === +key){

                    this.mails.splice(i,1)
                        break;
                }
                }
                
            }
            console.log(this.mails);
            // EmailService.deleteMails([0,1])
            // this.mails = EmailService.mailList
            // console.log('delete clicked,mails after delete:',this.mails)
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