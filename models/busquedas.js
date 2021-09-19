const axios = require('axios');


class Busquedas{
    
    historial = ['Madrid', 'Guadalajara', 'Singapur'];

    constructor(){
        // Leer la base de datos solo si existe
    }
    get paramMapbox(){
        return{
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad( lugar = ''){

        try{
            // realizar peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramMapbox
            });

            const resp = await instance.get();
            console.log(resp.data);


            return []

        }catch (error){
            return [];
        }
         // retorna los lugares 

    }

}

// Solo cuando solo vamos a exporar esta clase
module.exports = Busquedas;