
const CACHE_NAME = "V2_cache_Portafolio_RRC";

urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/script.js',
    '/serviceworker.js',
    '/pdf/Cris.pdf',
    '/pdf/Curriculum_Vitae.pdf',
    '/pdf/Motoko.pdf',
    '/pdf/negociacion.pdf',
    '/pdf/ico.png',


    //icons  
    '/pdf/ico.png',


    
     // Imágenes del contenido
     '/images/co.jpg',
     '/images/gym.jpg',
     '/images/tik.jpeg',
     '/images/uni.jpg',
     '/images/yo.jpeg',
     '/images/yo6.png',

   
   //rescursos externos
    '/css/index.css',
    'bootstrap.css',
    'bootstrap.js',
    'script.js',
];

//Funcion de instalacion
//almacena el nombre y los archivos que van a ir guardados en cache

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return Promise.all(
                urlsToCache.map(url => {
                    return cache.add(url).catch(error => {
                        console.error('Error al cachear:', url, error);
                    });
                })
            );
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e =>{
    const listaBlancaCache = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(nombresCache => {
            return Promise.all(
                nombresCache.map(nombresCache =>{
                    if(listaBlancaCache.indexOf(nombresCache) === -1){
                        return caches.delete(nombresCache)
                    }
                })
            )
        })
        //activamos la cache actualizada
        .then(()=> self.clients.claim())
    )

})

// consultar el servidor 
self.addEventListener('fetch', e =>{
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            if(res)
            {
                return res
            }
            return fetch(e.request)
        })
    )
})