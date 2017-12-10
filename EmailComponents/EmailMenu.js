import EmailService from '../services/EmailService.js'
import EventBusService from '../services/EventBusService.js'
export default {
    template: `
    <div class="email-menu">
        <button @click="toggleCompose" class="compose-btn">composeMail</button><br>
        <button @click="markMails" class="mark-read-btn">mark as read</button><br>
        <button @click="deleteMails" class="email-delete-btn">
            <i class="fa fa-trash-o" aria-hidden="true"></i> delete
        </button><br>
        <button @click="sortByDate" class="arrange-date-btn">arrange by date</button>
        <input type="text" placeholder="search email" @keyup="updateEmailList" v-model="searchText">
        <i class="fa fa-search" aria-hidden="true"></i>
        
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