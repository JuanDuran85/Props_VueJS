let ComponentePelicula = {
    template: `
        <div>
            <img :src="cover"/>
            <h2 v-text="title"></h2>
            <p v-text="synopsis"></p>
            <button 
                @click="$emit('update:like', !like)" 
                v-text="like ? 'Favorita' : 'Agregar a Favorita' ">
            </button>
            <br>
            <button 
                @click="activarLike" 
                v-text="like2 ? 'Favorita2' : 'Agregar a Favorita2' ">
            </button>
            <br>
            <button 
                @click="activarLike2" 
                v-text="like3 ? 'Favorita3' : 'Agregar a Favorita3' ">
            </button>
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
        },
        like2: {
            type: Boolean,
            required: true,
            default(){
                return false
            }
        },
        like3: {
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
                like2 : !this.like2
            };
            this.$emit('LikeActivo', datos);
        },
        activarLike2(){
            //this.like = !this.like
            let datos = {
                id :this.id,
                like3 : !this.like3
            };
            this.$emit('LikeActivo3', datos);
        },
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