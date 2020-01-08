let FavoritoPelicula = {
    template: `
        <div class="movieFav-wrapper">
            <section :id="'Fav-'+ _uid" class="movieFav">
            </section>
        </div>
    `,
    data() {
        return {
            
        }
    },
    beforeCreate() {
        console.log('Antes de crear');
    },
    created() {
        console.log('ya crado pero aun no montado');
    },
    beforeMount() {
        console.log('antes de montarse');
    },
    mounted() {
        console.log('Ya montado');
        let $element = document.getElementById(`Fav-${this._uid}`);
        console.log($element);
        //let aux = this; pra usar en caso de aplicar funcion tradicional
        $element.addEventListener('animationend', ()=>{
            this.$emit('ocultarFav',false);
            console.log('desde el addEventListener');
        });
    },
    beforeUpdate() {
        console.log('antes de actualizar');
    },
    updated() {
        console.log('actualizando');
    },
    activated() {
        console.log('activado');
    },
    deactivated() {
        console.log('desactivando');
    },
    beforeDestroy() {
        console.log('antes de destruir');
    },
    destroyed() {
        console.log('destruido');
    },
    errorCaptured: (err, vm, info) => {
        console.log(err, vm, info);
    },

}