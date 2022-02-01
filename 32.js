// OGGETTI 

let gatto = {
    mome: "Geltrude",
    sesso: "f",
    zampe: 4,
    code: 1,
    nemici: ["acqua", "cani"]
}



console.log(gatto.nome)
console.log(gatto.sesso)



console.log(gatto['nome'])


gatto.sesso = "m"
gatto.nome = "Geltrudo"
console.log(gatto)


gatto.razza = "Soriano"
console.log(gatto)

gatto.nemici.push("Favi j")
console.log(gatto)



