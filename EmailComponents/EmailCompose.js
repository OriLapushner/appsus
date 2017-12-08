'use strict'
import EmailService from '../services/EmailService.js'
export default {

    template: `
                <div class="compose">
                <input type="text" placeholder="Send To" v-model="composedMail.sendTo">
                <input type="text" placeholder="Title" v-model="composedMail.title">
                <button @click="sendMail">send mail</button>
                <textarea contenteditable="true" class="compose-content" v-model="composedMail.content">
              </textarea>
                </div>
    `,
      data(){
        return {
          composedMail: {}
        }
      },
      methods: {
        sendMail(){
          this.composedMail.sentAt = Date.now();
          console.log(this.composedMail);
          EmailService.sendMail(this.composedMail)
        }
      }
}