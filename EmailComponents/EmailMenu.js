import EmailService from '../services/EmailService.js'
import EventBusService from '../services/EventBusService.js'
export default {
    template: `
    <div>
        <button @click="toggleCompose">composeMail</button>
        <button @click="deleteMails">delete</button>
        <button @click="markMails">mark as read</button>         
        <input type="text" placeholder="search email" @change="updateEmailList" v-model="searchText">
        <button @click="sortByDate">arrange by date</button>
        <button>unread first</button>
    </div>
`,
            data(){
                return {
                    searchText: ''
                }
            },
    methods: {
            toggleCompose(){
                this.$emit('toggleCompose')

            },
            updateEmailList(){
                // console.log(this.searchText)
                // EmailService.searchMailsByTxt(this.searchText)
                EventBusService.$emit('searchExecuted',this.searchText)
            },
            deleteMails(){
                EventBusService.$emit('deleteClicked')
                
            },
            markMails(){
                EventBusService.$emit('markClicked')
            },
            sortByDate(){
                EventBusService.$emit('sortByDateClicked')
            }
    }
}