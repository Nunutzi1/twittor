// Guardar en el cache dinamico

function actualizaCacheDinamico( dynamicCache, req, res ) {


    if ( res.ok ) { // Si la respuesta tiene data que almacenar en el cache
        return caches.open( dynamicCache ).then( cache => { // Entonces almacena

            cache.put( req, res.clone() ); // Almacenar en el cache la request

            return res.clone();

        });
    } else {
        return res;
    }


}