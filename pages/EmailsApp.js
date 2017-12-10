'use strict' // Start of use strict
import EmailList from '../EmailComponents/EmailList.js'
import EmailDisplay from '../EmailComponents/EmailDisplay.js'
import EmailMenu from '../EmailComponents/EmailMenu.js'
import EmailCompose from '../EmailComponents/EmailCompose.js'
import EventBusService from '../services/EventBusService.js'
export default {
    template: `
        <div>
            <div class="list-and-display-container">
                <div class ="list-container">
                <email-menu @toggleCompose="isComposeShown = !isComposeShown"></email-menu>
                <email-list></email-list>
                </div>  
                <email-display :mail="currMail"></email-display>
            </div>
            <email-compose v-show="isComposeShown" class="compose"></email-compose>
        </div>
    `,
    data() {
        return {
            currMail: {
                id: null,
                sentBy: null,
                title: null,
                isRead: null,
                sentAt: null,
                content: '',

            },
            isComposeShown: false,
        }
    },
    created() {
        console.log('created')
        EventBusService.$on('mailSelected', (currMail) => {
            this.currMail = currMail;
        })

        EventBusService.$on('closeCompose', (currMail) => {
            this.isComposeShown = false
        })
    },
    components: {
        EmailList,
        EmailDisplay,
        EmailMenu,
        EmailCompose
    }
}