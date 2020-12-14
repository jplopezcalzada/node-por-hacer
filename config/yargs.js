const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Crear un elemento por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca completado la tarea'
}




const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
            descripcion

        }

    ).command('actualizar', 'Actualiza el estado completado de una tarea', {
            descripcion,
            completado

        }

    ).command('borrar', 'Elimina un elemento creado', {
            descripcion

        }

    ).command('listar', 'Lista los completados o no segun el filtro', {
            completado

        }

    )
    .help().argv;

module.exports = {
    argv
};