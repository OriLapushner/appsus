import EventBusService from '../services/EventBusService.js'
export default {
    template: `
    <div class ="email-display">
        <div class="email-disp-text">
            <h1>{{mail.title}}</h1>
            from:{{mail.sentBy}}<br>
            <p>{{mail.content}}</p>
        </div> 
    </div>
    `
    ,
    props: ['mail']
}
