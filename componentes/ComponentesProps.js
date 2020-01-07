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
                :like.sync="item.like"
                :like2="item.like2"
                @LikeActivo="activandoLikes"
                mensaje="Aplicación para Peliculas"
            />
            <FavoritoPelicula v-if="showFavorito" @ocultarFav="activarOcultoFav"/>
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
                    like: false,
                    like2: false
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false,
                    like2: false
                },
                {
                    id: 3,
                    title: 'Toy Story',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/uMZqKhT4YA6mqo2yczoznv7IDmv.jpg',
                    like: false,
                    like2: false
                }
            ],
            showFavorito: false
        }
    },
    components: {
        ComponentePelicula,
        FavoritoPelicula
    },
    methods: {
        activandoLikes(datos){
            let peliculaLike = this.peliculas.find(peli => peli.id == datos.id);
            peliculaLike.like2 = datos.like2;
            this.showFavorito = datos.like2;
            
            if (datos.like2) {
                alert(`${peliculaLike.title} agregada a favortias 2`);
            }
            //ocultando la animacion con setTimeout
            /* setTimeout(()=> {
                 this.showFavorito = false;
            },1900);*/
        },
        activarOcultoFav(show){
            this.showFavorito = show;
        }
    },
});

/* en el componenete padre se escucha el evento emitido por el componente hijo
para ello se utiliza el @ mas el nombre del evento en el emit del hijo, y se iguala a un metodo
para que realice lo deseado. 

como primer ejemplo se puede usar el  @LikeActivo="activandoLikes" para hacer el llamado a la funcion en methods y realizarel proceso. Esta es la forma mas larga.

Mientras que la otra forma, la cual es trabajando con sync, es mas corta y rapida. Porque se sincroniza el props con la data entre los componentes hijo y padre

se ejecuta la arrow function para poder llevar el valor del estado actual, de lo
contrario, la funcion crea su propio entorni y pierda el valor
*/