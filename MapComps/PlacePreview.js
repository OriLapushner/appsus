'use strict' // Start of use strict

export default {
    template: `
    <section class="place-preview">
        Where? <h1>{{place.name}}</h1>
        What? <h3>{{place.desc}}</h3>
        Tag: <h4>{{place.tag}}</h4>
    </section>
    `,
    props: ['place']
}




// Add img to place details later on
// See: <img class="place-img" :src="'..img/' + place.id + '.jpg'"  />


