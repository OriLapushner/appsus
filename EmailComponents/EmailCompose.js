'use strict'
// import EmailService from '../services/EmailService.js'

export default {

    template: `
                <div class = "compose">
                <input type = "text" placeholder="Send To">
                <input type = "text" placeholder="Title">
                <div contenteditable="true" class ="compose-content">
                mail content
              </div>
                </div>
    `
}