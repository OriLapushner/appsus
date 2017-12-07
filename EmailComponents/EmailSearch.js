export default {
    template: `
    <div>
    <button @click="toggleCompose">composeMail</button>
    <button @click="deleteMails(mails.ids)">delete</button>                
    <input type="text" placeholder="search email">
    <button>arrange by date</button>
    <button>newest first</button>
    </div>
`,
    methods: {
            toggleCompose(){
                this.$emit('toggleCompose')

            }
    }
}