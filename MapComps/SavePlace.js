'use strict' // Start of use strict

import MapService from '../services/MapService.js';

export default {
    template: `
    <section> 
        <h2>Your search details</h2>
        <form @submit.prevent="savePlace">
        Place Address: 
        <input type="text" v-model="place.title" />
        Place Description: 
        <input type="text" v-model="place.text" />
        <button class="save-btn">Save Place</button>
        </form>
    </section>
    `,
    props: ['currPlace'],
    data() {
        return {
            place: {}
        }
    },
    methods: {
        savePlace() {
            MapService.addPlace()
            .then(addedPlace => {})
            .catch(err => alert('could not save place')); 
        }
    }
}