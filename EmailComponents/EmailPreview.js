
import EventBusService from '../services/EventBusService.js'
export default {

    template: `
                <div class="email-prev" :class="classes">
                    <input type ="checkbox" @click="updateValueStatus(mail.id)">
                    <div class="prev-text" @click ="selectMail(mail)">
                        {{mail.title}}<br>
                        {{mail.sentBy}}<br>
                        {{mail.sendAtStr}}
                    </div>
                </div>
    `,
    props: ['mail'],
    data() {
        return {
            checked: false,
        }

    },
    computed: {
            classes(){
                return {
                    isRead: this.mail.isRead
                }
            }
    },
    methods: {
        selectMail(mail) {
            this.mail.isRead = true
            EventBusService.$emit('mailSelected', mail)
            // console.log('select mail event was fired')
        },
        updateValueStatus(mailId) {
            this.checked = !this.checked
            EventBusService.$emit('mailChecked', mailId)
            // console.log(mailId,'is now:',this.checked)
            // this.checked[id] = !this.checked[id]
        }
    }

}


