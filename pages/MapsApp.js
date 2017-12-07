'use strict' // Start of use strict

import MapService from '../services/MapService.js';
import PlacePreview from '../MapComps/PlacePreview.js';
import PlaceDetails from '../MapComps/PlaceDetails.js';

export default {
    template: `
    <section class="places">
        <h1>Maps App</h1>
        <form>
        <input type="text" placeholder="Search" class="search-input" v-model="searchTxt"/>
        <button class="search-btn" @click="searchPlace">Go</button>
        {{searchTxt}}
        </form> 
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
            searchTxt: ''
        }
    },
    methods:  {
        searchPlace() {
            MapService.searchPlace(this.searchTxt)
            .then(addedSearch => resolve(searchTxt))
            .catch(err => alert('could not add place'))
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
        PlaceDetails
    }
}
