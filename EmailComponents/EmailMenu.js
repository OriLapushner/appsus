import EmailService from '../services/EmailService.js'
import EventBusService from '../services/EventBusService.js'
export default {
    template: `
    <div>
<<<<<<< HEAD
        <button @click="toggleCompose" class="compose-btn">composeMail</button><br>
        <button @click="markMails" class="mark-read-btn">mark as read</button><br>
        <button @click="deleteMails" class="email-delete-btn">
            <i class="fa fa-trash-o" aria-hidden="true"></i> delete
        </button><br>
        <button @click="sortByDate" class="arrange-date-btn">arrange by date</button>
        <input type="text" placeholder="search email" @keyup="updateEmailList" v-model="searchText">
        <i class="fa fa-search" aria-hidden="true"></i>
        
=======
        <button @click="toggleCompose">composeMail</button>
        <i class="fa fa-trash-o delete-btn" aria-hidden="true" @click="deleteMails"></i>        
        <button @click="markMails">mark as read</button>         
        <input type="text" placeholder="search email" @change="updateEmailList" v-model="searchText">
        <button @click="sortByDate">arrange by date</button>
        <button>unread first</button>
>>>>>>> ca8b8d79ed708e1575620024e6df05811b239426
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