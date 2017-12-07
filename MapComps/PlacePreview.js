'use strict' // Start of use strict

export default {
    template: `
    <section>
        <h1> -) {{place.name}}</h1>
        <h4>{{place.tag}}</h4>
        <button class="render-details" @click="$emit('editClicked', place.id)">See More</button>
    </section>
    `,
    props: ['place'], 
}



