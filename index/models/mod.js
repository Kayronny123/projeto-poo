function capitalizar(vetor) {
    const modificado = [];

    for (let i = 0; i < vetor.length; i++) {
        const letraInicial = (vetor[i]).charAt(0).toUpperCase();
        const resto = vetor[i].slice(1);
        const resultado = letraInicial + resto
        modificado[i] = resultado
    }
    return modificado
}
function ordenar(vetor) {
    return vetor.sort(function (a, b) {
        return a.localeCompare(b);
    });
}
function caixaAlta(vetor){
    const modificado =[]
    for(let i = 0; i<vetor.length; i++){
        modificado[i]= vetor[i].toUpperCase()
    }
    return modificado
}

export default {
    capitalizar: capitalizar,
    ordenar: ordenar,
    caixaAlta: caixaAlta
}