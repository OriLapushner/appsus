'use strict' // Start of use strict

import MapService from '../services/MapService.js';

export default {
    template: ` 
        <section v-if="showDetails">
            <div>
                <label>Where?</label>
                <input v-model="updatedPlace.name" :disabled="editDisabled" />
            </div> 
            <div>
                <label>What?</label>           
                <input v-model="updatedPlace.desc" :disabled="editDisabled" />
            </div>
            <div>
                <label>Tag it:</label>
                <select v-model="updatedPlace.tag" :disabled="editDisabled">
                    <option>Culture</option>
                    <option>Sport</option>
                    <option>Food</option>
                    <option>Work</option>
                    <span>Selected: {{ updatedPlace.tag }}</span>                    
              </select>                
            </div>
           <img class="place-img" :src="'..img/' + updatedPlace.id + '.jpg'"
           <button class="edit-btn" @click="editDisabled = !editDisabled">Toggle Edit</button>
           <button class="save-place-btn" @click="updatePlace" v-if="!editDisabled">Save</button>
        </section>
    `,
    props: ['place'],
    data() {
        return {
            updatedPlace: {},
            editDisabled: true,
            showDetails: true
        }
    },
    created() {
        this.updatedPlace = Object.assign({}, this.place);
    },
    methods: {
        updatePlace() {
            MapService.updatePlace(this.updatedPlace); 
            this.showDetails = false;
        }
    }
}