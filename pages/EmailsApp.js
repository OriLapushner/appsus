'use strict' // Start of use strict
import EmailList from '../EmailComponents/EmailList.js'
export default {
    template: `
    <div>
    <h1>Emails App</h1>
    <email-list></email-list>
    </div>
    `,
    components:{
        EmailList
    }
}