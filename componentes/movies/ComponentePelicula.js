let ComponentePelicula = {
    template: `
        <div>
            <img :src="cover"/>
            <h2 v-text="title"></h2>
            <p v-text="synopsis"></p>
            <hr>
        </div>
    `,
    props: {
        id: {
            type: Number,
            required: true
        },
        cover: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        synopsis: {
            type: String,
            default: "No posee información"
        }
    }
}

/*
esta forma es la mas rapida de llevar los valores a los props
   props: [
        'id',
        'title',
        'synopsis',
        'cover'
    ]

*/