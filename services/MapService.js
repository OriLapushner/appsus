'use stricts' // Start of use strict

var id = 100;
var gMap;
var gMarkers = [];

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

var markers = [];
var infoWindow = new google.maps.InfoWindow({
    content: 'placeholder...'
});

function getMarker(place, gMap) {

    var content = `
        <p>${place.name}</p>
    `;

    var marker = new google.maps.Marker({
        position: {lat: place.lat, lng: place.lng},
        map: gMap,
        title: place.name,
        draggable: true,
        animation: google.maps.Animation.DROP
    })
    marker.addListener('click', function () {
        infoWindow.setContent(content);
        infoWindow.open(gMap, marker);
    });

    return marker;
}

function getInputElement() {
    return document.querySelector('.search-input');
}

function setAutocomplete(gMap) {
    var input = getInputElement();
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', gMap);
}

function initialPlace(initLocation, gMap) {
    var loc = {};
    var geocoder = new google.maps.Geocoder();
    // if(google.loader.ClientLocation) {
    //     loc.lat = google.loader.ClientLocation.latitude;
    //     loc.lng = google.loader.ClientLocation.longitude;

    var latlng = new google.maps.LatLng(initLocation.lat, initLocation.lng);
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            //const {lat, lng} = results[0].geometry.location
            const place = {
                name: results[0].formatted_address,
                lat: initLocation.lat,
                lng: initLocation.lng
            };
            markers.push(getMarker(place, gMap));
        };
    });
}

function initSearch() {
    var input = getInputElement();
    var searchBox = new google.maps.places.SearchBox(input);

    searchBox.addListener('places_changed', function () {
        console.log('places changed')
        var places = searchBox.getPlaces();
        if (places.length === 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        // markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }

            const p = {
                name: place.name,
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng
            };
            markers.push(getMarker(p, gMap));
        });
    });
}

function initMap(lat, lng) {
    if (!lat) lat = 27.715390;
    if (!lng) lng = 85.312329;
    gMap = new google.maps.Map(document.querySelector('#map'), {
        zoom: 15,
        center: { lat, lng }
    });
    var p = { name: 'default', desc: 'default', tag: 'default' };
    initSearch(gMap);
    initialPlace({lat, lng}, gMap);

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    places.forEach(place => {
        const { lat, lng } = place;
        getMarker(place, gMap)
    })

    setAutocomplete(gMap);
    // getInitialPlace(lat, lng, gMap)

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }

    }

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
        resolve()
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
    updatePlace,
    initSearch,
    gMap
}

