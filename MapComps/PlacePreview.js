'use strict' // Start of use strict

export default {
    template: `
    <section class="place-preview">
        <h1>{{place.name}}</h1>
        <h3>{{place.desc}}</h3>
        <h4>{{place.lat}}</h4>
        <h4>{{place.lng}}</h4>
        <h4>{{place.tag}}</h4>
        <img class="place-img" :src="'..img/' + place.id + '.jpg'"  />
    </section>
    `,
    props: ['place']
}

