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
    get paramOpenWeather(){
        return{
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es',
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
            return resp.data.features.map( lugar=> ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));

        }catch (error){
            return [];
        }
         // retorna los lugares 

    }
    async climaLugar(lat, lon){
             
        try{
           const instance = axios.create({
               baseURL: `https://api.openweathermap.org/data/2.5/weather`,
               params: {...this.paramOpenWeather, lat, lon}
               
        });
        const resp = await instance.get();
        const {weather, main} = resp.data;

        return {
            desc: weather[0].description,
            min: main.temp_min,
            max: main.temp_max,
            temp: main.temp

        }
       }catch (error){
           console.log(error);
       }
    }

}

// Solo cuando solo vamos a exporar esta clase
module.exports = Busquedas;