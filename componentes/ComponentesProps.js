Vue.component('componentes-props', {
    template: `
        <div>
            <h3>Peliculas</h3>
            <ComponentePelicula 
                v-for="(item,index) in peliculas" 
                :key="index" 
                :title="item.title" 
                :synopsis="item.synopsis" 
                :cover="item.cover" 
                :id="item.id" 
                :like="item.like"
                @LikeActivo="activandoLikes" 
                mensaje="Aplicación para Peliculas"/>
        </div>
    `,
    data() {
        return {
            peliculas: [
                {
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like: false
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false
                },
                {
                    id: 3,
                    title: 'Toy Story',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/uMZqKhT4YA6mqo2yczoznv7IDmv.jpg',
                    like: false
                }
            ]
        }
    },
    components: {
        ComponentePelicula
    },
    methods: {
        activandoLikes(datos){
            let peliculaLike = this.peliculas.find(peli => peli.id == datos.id);
            peliculaLike.like = datos.like;
            console.log(peliculaLike.like);
        }
    },
});

/* en el componenete padre se escucha el evento emitido por el componente hijo
para ello se utiliza el @ mas el nombre del evento en el emit del hijo, y se iguala a un metodo
para que realice lo deseado

*/