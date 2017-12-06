'use stricts' // Start of use strict

var id = 100; 
var gMap;

var places = [
    {
        id: id++,
        name: 'Maon 3, Tel Aviv-Yafo',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        lat: 32.055916,
        lng: 34.766896,
        tag: 'Home',
        photo: '..img/maon3.jpg'  
    },
    {
        id: id++,
        name: 'Anita Neve-Tsedek',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        lat: 32.062686,
        lng: 34.766461,
        tag: 'Anita Ice-Cream, Neve-Tsedek branch',
        photo: '..img/anita.jpg'  
    }
]

function initMap(lat, lng) {
    if (!lat) lat = 32.085300;
    if (!lng) lng = 34.781768;
    gMap = new google.maps.Map(document.querySelector('#map'), {
      zoom: 15,
      center:  { lat, lng }
    });
    var marker = new google.maps.Marker({
        position: { lat, lng },
        map: gMap,
        title: 'This is you'
    });
  }

function getPlaces() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(places)
        }, 1000)
    });
}


export default {
    getPlaces,
    initMap
}

