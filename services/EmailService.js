'use strict'
var mailList = [
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
function getMails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mailList)

        }, 1000);
    })
}

export default {
    getMails,
    deleteMail
    // searchMailByTxt,
    // searchMailsByTxt
}

// function searchMailsByTxt(mails, txt) {
//     mails.filter(mail => (searchMailByTxt(currMail, txt)))
// }


function deleteMail(mailId){
var index = mailList.findIndex(mail => mail.id === mailId)
mailList.splice(index,1);

}
function deleteMails(mailIdsArr){
array.forEach(deleteMail);
}