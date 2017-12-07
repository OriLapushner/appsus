    'use strict' // Start of use strict

import MapService from '../services/MapService.js';

export default {
    template: ` 
        <section>
           <input Where?  {{place.name}} Tag: {{place.tag}} />
           Testing:  {{place.name}}
           <h3> What? {{place.desc}}</h3>
           <img class="place-img" :src="'..img/' + place.id + '.jpg'"
           <button class="edit-btn">Edit</button>
           <button class="delete-btn" @click="deletePlace(place.id)">X</button> 
        </section>
    `, 
    props: ['place'],
    methods: {
        deletePlace(placeId) {
            MapService.deletePlace(placeId)
            .then(_ => {
                alert('Are you sure about this?');
            })
        }
    }
}