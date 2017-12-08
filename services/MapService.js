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

function initMap(lat, lng) {
    if (!lat) lat = 27.715390;
    if (!lng) lng = 85.312329;
    gMap = new google.maps.Map(document.querySelector('#map'), {
        zoom: 15,
        center: { lat, lng }
    });
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var markers = places.map(function (place, i) {
        return new google.maps.Marker({
            position: {
                lat: place.lat, lng: place.lng
            },
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(gMap, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

    var marker = new google.maps.Marker({
        position: { lat, lng },
        map: gMap,
        title: 'This is you',
        // icon: set custom icon
    });
    places.forEach(place => {
        var infoWindow = new google.maps.InfoWindow({
            content: `
            <p>${place.name}</p>
            <p>${place.desc}</p>
            <p>${place.tag}</p>
            `
        })
        marker.addListener('click', function () {
            infoWindow.open(gMap, marker);
        })
        var defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(32.085300, 34.781768),
            new google.maps.LatLng(32.162413, 34.844675));

        var options = {
            bounds: defaultBounds
        }

        var input = document.querySelector('.search-input');
        gMap.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


        var autocomplete = new google.maps.places.Autocomplete(input, options);
    })


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

            console.log('res', res);
            let result = res.data.results[0];

            return result
        })
        .catch(err => {
            reject(err);
        })
}

function updatePlace(place) {
    let placeToUpdateIdx = places.findIndex(currPlace => currPlace.id === place.id)
    places.splice(placeToUpdateIdx, 1, place);

}

export default {
    getPlaces,
    initMap,
    deletePlace,
    searchPlace,
    addPlace,
    updatePlace
}

