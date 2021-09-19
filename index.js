const { leerInput, 
    inquirerMenu,
     pausa
     } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");




const main = async () => {
    
    const busquedas = new Busquedas();
    let opt;

    do{

        opt = await inquirerMenu();

        switch(opt){
            case 1:
                // Mostrar mensaje 

                // Buscar los lugares

                // Seleccionar el lugar

                // Datos del Clima

                // Mostrar Resultados
                console.log('\nInformación de la Ciudad\n'.green);
            break;


        }
        console.log({opt});



        if (opt !== 0)  await pausa();

    }while( opt !== 0)
}


main();