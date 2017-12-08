'use strict' // Start of use strict

import MapService from '../services/MapService.js';
import PlacePreview from '../MapComps/PlacePreview.js';
import PlaceDetails from '../MapComps/PlaceDetails.js';

{/* <input class="search-res-tag" placeholder="Tag" v-model="tag" /> */}

export default {
    template: `
    <section class="places">
        <h1>Maps App</h1>
        <form>
            <input type="text" placeholder="Search" class="search-input" v-model="searchTxt" autofocus/>
            <button class="search-btn" @click="searchPlace">Search</button>       
        </form> 

        <div v-if="isShown">
            <p>{{text}}</p>
            <form class="search-res">
                <p class="search-res-address">{{currPlace.formatted_address}}</p>
                <input class="search-res-desc" placeholder="Description" v-model="desc" required/>
                Tag: <select class="search-res-tag" v-model="tag">
                    <option>Culture</option>
                    <option>Sport</option>
                    <option>Food</option>
                    <option>Work</option>
                    <span>Selected: {{ tag }}</span>                    
                </select>  
                <button class="save-btn" @click="savePlace">Save Place</button>
                <button class="cancel-btn" @click="isShown = false">Cancel</button>
            </form>
        </div>
        <div id="map"></div>  
        <div class="places-title">Your Places</div>        
        <ul class="place-preview">
            <li v-for="place in places">
                <place-preview :place="place" @editClicked="changeSelectedId"></place-preview>
                <place-details v-if="selectedId === place.id" :place="place"></place-details>
            </li>
        </ul>
    </section> 
    `,
    data() {
        return {
            places: {},
            searchTxt: '',
            currPlace: null,
            text: '',
            isShown: false,
            desc: '', 
            tag: '',
            selectedId: null
        }
    },
    methods:  {
        changeSelectedId(id){
            // console.log({id})
            this.selectedId = id;
        },
        searchPlace() {
            MapService.searchPlace(this.searchTxt)
            .then((res) => {
                console.log(res)
                if (!res) return
                this.currPlace = res;
                this.text = "Found address! do you want to save?"
                MapService.initMap(res.geometry.location.lat, res.geometry.location.lng);
                this.isShown = true;                
            })
            .catch(err => console.log(err))
        },
        savePlace() {
            var addedPlace = {
                id: this.currPlace.place_id ,
                name: this.currPlace.formatted_address, 
                desc: this.desc, 
                lat: this.currPlace.geometry.location.lat ,
                lng: this.currPlace.geometry.location.lng,
                tag: this.tag
            }
            // if (this.desc && this.tag === '') alert('Please fill out some info about this place');
            this.places.push(addedPlace);
        },
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
        PlacePreview,
        PlaceDetails,
    }
}



