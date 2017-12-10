'use strict'
var sourceMailList = [
    {
        id: 0,
        sentBy: 'sentBy',
        title: 'title',
        isRead: true,
        sentAt: Date.now() +2000,
        content: `
        Lorem ipsum dolor sit amet, vel ancillae scaevola philosophia te, at vim noster latine impedit.
         Nobis appetere ut vel, nec illud suscipit delicata ea.
         Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti
        Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti`,
        sendAtStr: (new Date() + '').replace(/GMT.*\(.*\)/,'')
    },
    {
        id: 1,
        sentBy: 'sentBy1',
        title: 'title1',
        isRead: false,
        sentAt: Date.now() + 400,
        content: `
        Lorem ipsum dolor sit amet, vel ancillae scaevola philosophia te, at vim noster latine impedit.
         Nobis appetere ut vel, nec illud suscipit delicata ea.
         Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti
        Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti`,
        sendAtStr: (new Date() + '').replace(/GMT.*\(.*\)/,'')
    },
    {
        id: 2,
        sentBy: 'sentBy2',
        title: 'title2',
        isRead: false,
        sentAt: Date.now() + 100,
        content: `
        Lorem ipsum dolor sit amet, vel ancillae scaevola philosophia te, at vim noster latine impedit.
         Nobis appetere ut vel, nec illud suscipit delicata ea.
         Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti
        Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti`,
        sendAtStr: (new Date() + '').replace(/GMT.*\(.*\)/,'')
    },
    {
        id: 3,
        sentBy: 'sentBy3',
        title: 'title3',    
        isRead: false,
        sentAt: Date.now() + 200,
        content: `
        Lorem ipsum dolor sit amet, vel ancillae scaevola philosophia te, at vim noster latine impedit.
         Nobis appetere ut vel, nec illud suscipit delicata ea.
         Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti
        Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti`,
        sendAtStr: (new Date() + '').replace(/GMT.*\(.*\)/,'')
    },
    {
        id: 4,
        sentBy: 'sentBy4',
        title: 'title4',    
        isRead: false,
        sentAt: Date.now() + 200,
        content: `
        Lorem ipsum dolor sit amet, vel ancillae scaevola philosophia te, at vim noster latine impedit.
         Nobis appetere ut vel, nec illud suscipit delicata ea.
         Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti
        Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti`,
        sendAtStr: (new Date() + '').replace(/GMT.*\(.*\)/,'')
    },
    {
        id: 5,
        sentBy: 'sentBy5',
        title: 'title5',    
        isRead: false,
        sentAt: Date.now() + 200,
        content: `
        Lorem ipsum dolor sit amet, vel ancillae scaevola philosophia te, at vim noster latine impedit.
         Nobis appetere ut vel, nec illud suscipit delicata ea.
         Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti
        Eu utinam discere eum. Ut graecis periculis mea, liber lobortis sadipscing ut vix.
        Ex fasti`,
        sendAtStr: (new Date() + '').replace(/GMT.*\(.*\)/,'')
    },
]
var mailList = sourceMailList.slice()

function getMails() {
    return mailList
}


export default {
    getMails,
    deleteMails,
    sendMail,
    searchMailsByTxt,
    mailList
}

function searchMailsByTxt(txt) {
    console.log('text to search: ', txt)
    return mailList.filter(mail => {
        if (mail.title.includes(txt)) return true
        if (mail.content.includes(txt)) return true
        if (mail.sentBy.includes(txt)) return true
        return false;
    })
    console.log(mailList)
}

function deleteMail(mailId) {
    var index = mailList.findIndex(mail => mail.id === mailId)
    new Promise((resolve, reject) => {
        resolve(index)
    }).then((index) => mailList.splice(index, 1))


}
function deleteMails(mailsIds) {
    console.log(mailsIds)
    for (var i = 0; i < mailsIds.length; i++) {
        deleteMail(mailsIds[i])
        
    }
    console.log('mails right now')
}

function sendMail(mail) {
    mail.sentBy = "someone@gmail.com"
    mail.isRead = false
    console.log('mail received in service:', mail)
    //should be sending info to server later
    mailList.push(mail);
    sourceMailList.push(mail);

}
