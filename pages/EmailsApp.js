'use strict' // Start of use strict
import EmailList from '../EmailComponents/EmailList.js'
import EmailDisplay from '../EmailComponents/EmailDisplay.js'
import EmailSearch from '../EmailComponents/EmailSearch.js'
import EmailCompose from '../EmailComponents/EmailCompose.js'
import EventBusService from '../services/EventBusService.js'
export default {
    template: `
        <div>
            <h1>Emails App</h1>
            <email-search @toggleCompose="isComposeShown = !isComposeShown"></email-search>
            <div list-and-display-container>
            <email-list></email-list>
            <email-display :mail="currMail"></email-display>
            </div>
            <email-compose v-show="isComposeShown"></email-compose>
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
    },
    components: {
        EmailList,
        EmailDisplay,
        EmailSearch,
        EmailCompose
    }
}