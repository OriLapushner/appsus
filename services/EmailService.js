'use strict'
var sourceMailList = [
    {
        id: 0,
        sentBy: 'sentBy',
        title: 'title',
        isRead: false,
        sentAt: Date.now(),
        content: 'body of email text',
    },
    {
        id: 1,
        sentBy: 'sentBy1',
        title: 'title1',
        isRead: false,
        sentAt: Date.now() + 400,
        content: 'content1',
    },
    {
        id: 2,
        sentBy: 'sentBy2',
        title: 'title2',
        isRead: false,
        sentAt: Date.now() + 100,
        content: 'content2',
    },
    {
        id: 3,
        sentBy: 'sentBy3',
        title: 'title3',
        isRead: false,
        sentAt: Date.now() + 200,
        content: 'content3',
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

// function searchMailByTxt(mail,txt){
//     console.log('text to search: ',txt)
//     if(mail.title.includes(txt)) return true
//     if(mail.content.includes(txt)) return true
//     if(mail.sentBy.includes(txt)) return true
//     return false;
// }


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