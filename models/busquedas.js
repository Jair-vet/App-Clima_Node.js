




class Busquedas{
    
    historial = ['Madrid', 'Guadalajara', 'Singapur'];

    constructor(){
        // Leer la base de datos solo si existe
    }

    async ciudad( lugar = ''){
        // realizar peticion http
        console.log(lugar);


        return []; // retorna los lugares 

    }

}

// Solo cuando solo vamos a exporar esta clase
module.exports = Busquedas;