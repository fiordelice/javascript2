function botaor() {
    var tabuada = document.getElementById("numero").value
    var multiplicador = 1
    document.getElementById("resultado").innerHTML = `tabuada do ${tabuada} <br>`
    while (multiplicador <= 10) {
        var resultado = multiplicador * tabuada
        document.getElementById("resultado").innerHTML += `<br> ${tabuada} x ${multiplicador} = ${resultado}`
        multiplicador++
    }
}
