'use strict' // Start of use strict

import MapService from '../services/MapService.js';
import PlacePreview from '../MapComps/PlacePreview.js';
import PlaceDetails from '../MapComps/PlaceDetails.js';
import SavePlace from '../MapComps/SavePlace.js';

export default {
    template: `
    <section class="places">
        <h1>Maps App</h1>
        <form>
            <input type="text" placeholder="Search" class="search-input" v-model="searchTxt"/>
            <button class="search-btn" @click="searchPlace">Search</button>       
        </form> 

        <div v-if="isShown">
            <p>{{text}}</p>
            <p class="search-res-address">{{currPlace.formatted_address}}</p>
            <input class="search-res-desc" placeholder="Description" v-model="desc" required/>
            <input class="search-res-tag" placeholder="Tag" v-model="tag" required/>
            <button class="save-btn" @click="savePlace">Save Place</button>
        </div>
        <div id="map"></div>  
        <div class="places-title">Your Places</div>        
        <ul class="place-preview">
            <li v-for="place in places">
            <place-preview :place="place"></place-preview>
            <place-details :place="place"></place-details>
            </li>
        </ul>
    </section>

    
    `,
    data() {
        return {
            places: {},
            searchTxt: '',
            currPlace: null,
            text: '',
            isShown: false,
        }
    },
    methods:  {
        searchPlace() {
            MapService.searchPlace(this.searchTxt)
            .then((res) => {
                console.log(res)
                if (!res) return
                this.currPlace = res;
                this.text = "found address! do you want to save?"
                MapService.initMap(res.geometry.location.lat, res.geometry.location.lng);
                this.isShown = true;                
                //this.currPlace = this.createPlaceObject(res)
            })
            .catch(err => console.log(err))
        },
        savePlace() {
            console.log('saved place');
            console.log(this.currPlace.id);
        },
        createPlaceObject(rawPlace) {
            var place = MapService.getEmptyPlace();
            // place.name = rawPlace.address_components.long_name;

            
            return place;
        }
    },
    created() {
        MapService.getPlaces()
            .then(places => {
                this.places = places;
            })
    },
    mounted() {
        MapService.initMap();        
    },
    components: {
        PlacePreview,
        PlaceDetails,
        SavePlace
    }
}

