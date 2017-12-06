'use strict' // Start of use strict

import MapService from '../services/MapService.js';
import PlacePreview from '../MapComps/PlacePreview.js';

export default {
    template: `
    <section class="places">
        <h1>Maps App</h1>
        <form>
        <input type="text" placeholder="Search" class="search-input"/>
        <button class="search-btn">Go</button>
        </form> 
        <div id="map"></div>  
        <div class="places-title">Your Places</div>        
        <ul class="place-preview">
            <li v-for="place in places">
            <place-preview :place="place"></place-preview>
            </li>
        </ul>
    </section>

    
    `,
    data() {
        return {
            places: {}
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
        PlacePreview
    }
}
