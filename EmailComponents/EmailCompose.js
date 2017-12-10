'use strict'
import EmailService from '../services/EmailService.js'
export default {

    template: `
                <div class="compose">
                <input type="text" placeholder="Send To" v-model="composedMail.sendTo">
                <input type="text" placeholder="Title" v-model="composedMail.title">
                <textarea contenteditable="true" class="compose-body" v-model="composedMail.content">
              </textarea>
              <button @click="sendMail">send mail</button>
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