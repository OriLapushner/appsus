'use strict'
var mailList = [
    {
    id:0,
    sentBy: 'sentBy',
    title: 'title',
    isRead: false,
    sentAt: Date.now(),
    content:'body of email text',
},
{
    id:1,
    sentBy: 'sentBy1',
    title: 'title1',
    isRead: false,
    sentAt: Date.now(),
    content:'content1',
},
{
    id:2,
    sentBy: 'sentBy2',
    title: 'title2',
    isRead: false,
    sentAt: Date.now(),
    content:'content2',
},
{
    id:3,
    sentBy: 'sentBy3',
    title: 'title3',
    isRead: false,
    sentAt: Date.now(),
    content:'content3',
},
]
function getMails(){
    return new Promise((resolve,reject) =>{
    setTimeout(()=> {resolve(mailList)
        
    }, 1000);
})
}

export default{
    getMails
}