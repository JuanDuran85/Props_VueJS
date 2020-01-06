let ComponentePelicula = {
    template: `
        <div>
            <img :src="cover"/>
            <h2 v-text="title"></h2>
            <p v-text="synopsis"></p>
            <button @click="$emit('update:like', !like)" v-text="like ? 'Favorita' : 'Agregar a Favorita' "></button>
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
        },
        mensaje: {
            type: String
        },
        like: {
            type: Boolean,
            required: true,
            default(){
                return false
            }
        }
    },
    methods: {
        activarLike(){
            //this.like = !this.like
            let datos = {
                id :this.id,
                like : !this.like
            };
            this.$emit('LikeActivo', datos);
        }
    },
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

// el uso de $emit permite emitir eventos desde hijo al padre.
// emit es un metodo.
// $emit(primer valor nombre del evento que se va a emitir, segunda propiedad es el valor o una data) 
/* 
al usar el sync, se debe utilizar el @click="$emit('update:nombre de la data', valor)"
*/