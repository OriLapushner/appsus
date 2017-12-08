import EmailService from '../services/EmailService.js'
import EventBusService from '../services/EventBusService.js'
export default {
    template: `
    <div>
        <button @click="toggleCompose">composeMail</button>
        <button @click="deleteMails">delete</button>                
        <input type="text" placeholder="search email" @change="updateEmailList" v-model="searchText">
        <button>arrange by date</button>
        <button>newest first</button>
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
                
            }
    }
}