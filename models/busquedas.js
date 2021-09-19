const axios = require('axios');


class Busquedas{
    
    historial = ['Madrid', 'Guadalajara', 'Singapur'];

    constructor(){
        // Leer la base de datos solo si existe
    }

    async ciudad( lugar = ''){

        try{
            // realizar peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params:{
                    'access_token': 'pk.eyJ1IjoidmV0ZXJhbm8yMjIiLCJhIjoiY2t0cmxkaGs3MGxncTJxbDV1ZmRyeWxrMCJ9.0CGiSOcZo0tJmKmk6SVrSw',
                    'limit': 5,
                    'language': 'es'
                }
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