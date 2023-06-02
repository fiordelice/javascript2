function botao() {
    document.getElementById("resultado").innerHTML = ''
    var tabuada = document.getElementById("numero").value 
    var multiplicador = 1 
    for (var multiplicador = 1; multiplicador <= 10; multiplicador++){
        var resultado = multiplicador * tabuada
        document.getElementById("resultado").innerHTML += `<br> ${tabuada} x ${multiplicador} = ${resultado}`
    }

    var resultado = multiplicador * tabuada
}