import modificador from "./models/mod.js"

const ingredientes = ["água", "mel", "sal", "mostarda"];

const resultadoCaptalizado = modificador.capitalizar(ingredientes);
const resultadoOrdenado = modificador.ordenar(resultadoCaptalizado);
const resultadoCaixaAlta = modificador.caixaAlta(ingredientes)
console.log(resultadoCaptalizado)
console.log(resultadoOrdenado)
console.log(resultadoCaixaAlta)
