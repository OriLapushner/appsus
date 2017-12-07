    'use strict' // Start of use strict

    import MapService from '../services/MapService.js';


export default {
    template: ` 
        <section>
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
                <input v-model="updatedPlace.tag" :disabled="editDisabled" />                 
            </div>
           <img class="place-img" :src="'..img/' + updatedPlace.id + '.jpg'"
           <button class="edit-btn" @click="editDisabled = !editDisabled">Toggle Edit</button>
           <button class="save-place-btn" @click="updatePlace" v-if="!editDisabled">Save</button>
           <button class="delete-btn" @click="deletePlace(updatedPlace.id)">X</button> 
        </section>
    `, 
    props: ['place'],
    data() {
        return {
            updatedPlace: {},
            editDisabled: true
        }
    },
    created() {
        
        console.log('this.place: ', this.place);
        this.updatedPlace = Object.assign({}, this.place);
        console.log('updatedPlace ', this.updatedPlace);

        
    },
    methods: {
        deletePlace(placeId) {
            MapService.deletePlace(placeId)
            .then(_ => {
                alert('Are you sure about this?');
            })
        }, 
        updatePlace() {
            MapService.updatePlace(this.updatedPlace ); //id
        }
    }
}