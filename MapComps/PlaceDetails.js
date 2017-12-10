'use strict' // Start of use strict

import MapService from '../services/MapService.js';

export default {
    template: ` 
        <section v-if="showDetails">
            <div>
                <label>Where? </label>
                <input class="detail-name" v-model="updatedPlace.name" :disabled="editDisabled" />
            </div> 
            <div>
                <label>What? </label>           
                <input class="detail-desc" v-model="updatedPlace.desc" :disabled="editDisabled" />
            </div>
            <div>
                <label>Tag it: </label>
                <select class="detail-tag" v-model="updatedPlace.tag" :disabled="editDisabled">
                    <option>Culture</option>
                    <option>Sport</option>
                    <option>Food</option>
                    <option>Work</option>
                    <span>Selected: {{ updatedPlace.tag }}</span>                    
              </select>                
            </div>
            <div class="action-detail-btns">
                <img class="place-img" :src="'..img/' + updatedPlace.id + '.jpg'"
                <i class="fa fa-toggle-on edit-btn" aria-hidden="true" @click="editDisabled = !editDisabled"></i>           
                <i class="fa fa-floppy-o save-place-btn" aria-hidden="true" @click="updatePlace" v-if="!editDisabled"></i>
            </div>         
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