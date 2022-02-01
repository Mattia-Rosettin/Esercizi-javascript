// le proprietà degli oggetti possomo essere altri oggetti

let coca = {
    tipo: 'bevanda',
    quantità: 330,
    annacquata: true 
}

let fanta = {
    tipo: 'bevanda',
    quantità: 330,
    annacquata: false 
}

let cheeseburger = {
    tipo: 'panino',
    quantità: 100,
    scaduti: true
}

let happymeal = {
    bibita: fanta,
    panino: cheeseburger
}

console.log(happymeal)