const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};


const optdesc = {
    descripcion
};

const optactualizar = {
    descripcion,
    completado
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optdesc)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optactualizar)
    .command('borrar', 'Borrar un elemento por hacer', optdesc)
    .help().argv;

module.exports = {
    argv
};