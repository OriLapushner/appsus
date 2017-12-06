'use stricts' // Start of use strict

var id = 100; 

var places = [
    {
        id: id++,
        name: 'Maon 3, Tel Aviv-Yafo',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nulla euismod dolor ornare nisi mattis, id elementum velit ullamcorper.`,
        lat: 32.055916,
        lng: 34.766896,
        tag: 'Home',
        photo: '..img/maon3.jpg'  
    },
    {
        id: id++,
        name: 'Anita Neve-Tsedek',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nulla euismod dolor ornare nisi mattis, id elementum velit ullamcorper.`,
        lat: 32.062686,
        lng: 34.766461,
        tag: 'Anita Ice-Cream, Neve-Tsedek branch',
        photo: '..img/anita.jpg'  
    }
]

function getPlaces() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(places)
        }, 1000)
    });
}


export default {
    getPlaces
}

