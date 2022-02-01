

let schedamadre = {
    tipo: 'componmente',
    ram: 4,
    socket: 'amd'
}


let processore = {
    tipo: 'componente',
    core: 8,
    marca: 'intel'
}


let ram = {
    tipo: 'componente',
    GB: 16,
}


let schedavideo = {
    tipo: 'componente',
    modello: 'GE FORCE 3080'
}


let alimentatore = {
    tipo: 'componente',
    modello: 'boh'
}


let computer = {
    componente: schedamadre,
    componente: processore,
    componente: ram ,
    componente: schedavideo,
    componente: alimentatore
}
console.log(computer)