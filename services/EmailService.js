'use strict'
var mailList = [
    {
    id:0,
    sentBy: 'email adress string',
    title: 'some string',
    isRead: false,
    sentAt: Date.now(),
    content:'body of email text',
},
{
    id:1,
    sentBy: 'email adress string1',
    title: 'some string1',
    isRead: false,
    sentAt: Date.now(),
    content:'body of email text1',
},
{
    id:2,
    sentBy: 'email adress string2',
    title: 'some string2',
    isRead: false,
    sentAt: Date.now(),
    content:'body of email text2',
},
{
    id:3,
    sentBy: 'email adress string3',
    title: 'some string3',
    isRead: false,
    sentAt: Date.now(),
    content:'body of email text3',
},
]
function getMails(){
    return new Promise((resolve,reject) =>{
    setTimeout(()=> {resolve(mailList)
        
    }, timeout);
})
}

export default{
    getMails
}