'use strict' // Start of use strict

export default {
    template: ` <section class="add-place-modal modal is-active">
    <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                    <p class="modal-card-title">adding {{place.formatted_address}}</p>
            </header>
            <div class="modal-card-body">
                <form class="search-res">
                    <p class="search-res-address">{{place.formatted_address}}</p>                
                    <input class="search-res-desc input" placeholder="Description" v-model="desc" required/>
                    Tag: <select class="search-res-tag" v-model="tag">
                    <option>Culture</option>
                    <option>Sport</option>
                    <option>Food</option>
                    <option>Work</option>
                    <span>Selected: {{ tag }}</span>                    
                </select>  
                </form>
            <div>
            </div>  
        <div class="modal-card-foot">
            <button class="save-btn" @click="savePlace">Save Place</button>
            <button class="cancel-btn button" @click="closeModal">Cancel</button>
        </div>
        </div>
    </div>
    </section>
    `,
    props: ['place'],
    data() {
        return {
            places: {},
            searchTxt: '',
            currPlace: null,
            text: '',
            isShown: false,
            desc: '',
            tag: '',
            selectedId: null,
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
            console.log('inside close modal');
        },
        savePlace() {
            var addedPlace = {
                id: this.place.place_id,
                name: this.place.formatted_address,
                desc: this.desc,
                lat: this.place.geometry.location.lat,
                lng: this.place.geometry.location.lng,
                tag: this.tag
            }
            this.$emit('addPlace', addedPlace);
        },
    }
 }
