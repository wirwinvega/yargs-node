const { argv } = require('./config/yargs'); //Es lo mismo que la forma de abajo, solamente que aqui puedo incluir más caracteristicas del archivo yargs y en la forma de abajo tendría que agregar otra linea para obtener otra caracteristica.
//const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}



// console.log(argv.base);



// let parametro = argv[2];
// let base = parametro.split('=')[1]