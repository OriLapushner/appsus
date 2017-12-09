'use strict' // Start of use strict

import MapService from '../services/MapService.js';

{/* <button class="delete-btn" @click="deletePlace(place.id)">X</button> */}
{/* <button class="render-details" @click="$emit('editClicked', place.id)">See More</button> */}

export default {
    template: `
    <section>
        <h1>{{place.name}}</h1>
        <h4>{{place.tag}}</h4>
        <div class="action-btns">
            <i class="fa fa-expand render-details" aria-hidden="true"  @click="$emit('editClicked', place.id)"></i> 
            <i class="fa fa-map-marker" aria-hidden="true"></i>            
            <i class="fa fa-trash-o delete-btn" aria-hidden="true" @click="deletePlace(place.id)"></i>
        </div> 
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



