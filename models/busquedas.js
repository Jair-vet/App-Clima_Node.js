const axios = require('axios');




class Busquedas{
    
    historial = ['Madrid', 'Guadalajara', 'Singapur'];

    constructor(){
        // Leer la base de datos solo si existe
    }

    async ciudad( lugar = ''){
        // realizar peticion http
        // console.log('Ciudad', lugar);
        const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Ot.json?access_token=pk.eyJ1IjoidmV0ZXJhbm8yMjIiLCJhIjoiY2t0cmxkaGs3MGxncTJxbDV1ZmRyeWxrMCJ9.0CGiSOcZo0tJmKmk6SVrSw&limit=5&language=es');
        console.log(resp.data);


        return []; // retorna los lugares 

    }

}

// Solo cuando solo vamos a exporar esta clase
module.exports = Busquedas;