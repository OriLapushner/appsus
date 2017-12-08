'use strict' // Start of use strict

import MapService from '../services/MapService.js';

export default {
    template: `
    <section>
        <h1> -) {{place.name}}</h1>
        <h4>{{place.tag}}</h4>
        <button class="render-details" @click="$emit('editClicked', place.id)">See More</button>
        <button class="delete-btn" @click="deletePlace(place.id)">X</button>
    </section>
    `,
    props: ['place'], 
    data() {
        return {
            updatedPlace: {},            
        }
    },
    methods: {
        deletePlace(placeId) {
            MapService.deletePlace(placeId)
            .then(_ => {
                alert('Are you sure about this?');
            })
        }, 
    }
}



