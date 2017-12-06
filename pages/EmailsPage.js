'use strict' // Start of use strict
import emailPrevCmp from '../emailComponents/EmailPreviewCmp.js'
export default {
    template: `
    <div>
    <h1>Emails App</h1>
    <emailPrevCmp></emailPrevCmp> 
    </div>
    `,
    components:{
        emailPrevCmp
    }
}