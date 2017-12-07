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
        name: 'Shabazi 40, Tel Aviv-Yafo',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        lat: 32.062686,
        lng: 34.766461,
        tag: 'Food',
        photo: '..img/anita.jpg'  
    }
]

function getEmptyPlace() {
    return {
        id: id++,
        name: '', 
        desc: '', 
        lat: 0,
        lng: 0,
        tag: '', 
        photo: ''
    }
}

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

function _getNextId() {
    var maxId = places.reduce((acc, note) => {
        return (place.id > acc) ? place.id : acc
    }, 0);
    return maxId + 1;
}

function addPlace(place) {
    return new Promise((resolve, reject) => {
        if (place.id) {
            let placeToUpdateIdx = place.findIndex(currPlace => currPlace.id === place.id)
            places.spilce(placeToUpdateIdx, 1, place)
        } else {
            place.id = _getNextId();
            places.push(place);
        }
        resolve(note);
    })
}

function deletePlace(placeId) {
    return new Promise((resolve, reject) => {
        let placeIdx = places.findIndex(place => place.id === placeId); 
        places.splice(placeIdx, 1); 
    })
}

function searchPlace(searchTxt) {

   return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTxt}&key=AIzaSyDDt-heZX7Ax5jIybzzkhsBYw7nGSQYY6A`)
    .then((res) => {

        console.log('res',res);
       let result = res.data.results[0];
       
       return result
    })
    .catch(err => {
       reject(err);
    })
}


export default {
    getPlaces,
    initMap,
    deletePlace,
    searchPlace,
    addPlace,
    getEmptyPlace
}

