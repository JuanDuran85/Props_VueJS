let FavoritoPelicula2 = {
    template: `
        <div v-show="mostrar" class="movieFav-wrapper">
            <section :id="'Fav-'+ _uid" class="movieFav">
            </section>
        </div>
    `,
    props: {
        mostrar: {
            type: Boolean,
            default () {
                return false //para que no se muestre por defecto
            }
        }
    },
    mounted() {
        console.log('Ya montado');
        let $element2 = document.getElementById(`Fav-${this._uid}`);
        console.log($element2);
        //let aux = this; pra usar en caso de aplicar funcion tradicional
        $element2.addEventListener('animationend', ()=>{
            this.$emit('update: mostrar', false)
            console.log('desde el addEventListener2');
        });
    },
}