'use strict'
import EventBusService from '../services/EventBusService.js'
import EmailService from '../services/EmailService.js'
export default {

    template: `
                <div class="compose">
                <div class="compose-title"><span>New message</span>
                  <i class="fa fa-times" aria-hidden="true" @click="closeCompose"></i>                
                  </div>
                <input type="text" placeholder="Send To" v-model="composedMail.sendTo">
                <input type="text" placeholder="Title" v-model="composedMail.title">
                <textarea contenteditable="true" class="compose-body" v-model="composedMail.content">
              </textarea>
                <div class="button-wrapper">
              <button @click="sendMail">send mail</button>
                </div>
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
        },
        closeCompose(){
          EventBusService.$emit('closeCompose')
        }
      }
}