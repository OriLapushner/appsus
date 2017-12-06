'use strict' // Start of use strict
import MapService from '../services/MapService.js';
import PlacePreview from '../MapComps/PlacePreview.js';

export default {
    template: `
    <section class="places">
        <h1>Maps App</h1> 
        <ul>
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
    components: {
        PlacePreview
    }
}

// <!-- <li v-for="place in places">
//     <h1>{{place.name}}</h1>
//     <h3>{{place.desc}}</h3>
//     <h4>{{place.lat}}</h4>
//     <h4>{{place.lng}}</h4>
//     <h4>{{place.tag}}</h4>
//     <img class="place-img" :src="'..img/' + plac"  /> -->