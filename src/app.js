window.$ = require("jquery")

var Carro = require("./lib/carro.js")


let carro1 = new Carro('Fiat')
let carro2 = new Carro('Renault')

$("#div").html(carro1.brand+','+carro2.brand);
