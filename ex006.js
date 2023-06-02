function botaoCalcular(){
    var nr1 = document.getElementById("nrDigitado").value
    var nr2 = document.getElementById("nrDigitado2").value
    var soma = nr1 + nr2
    var sub= nr1 - nr2
    var mult = nr1 * nr2
    var div = nr1 / nr2
    var sobra = nr1 % nr2
    var exp = nr1 * nr2
    document.getElementById("resultados").innerHTML = 
    `${nr1} + ${nr2} = ${soma} <br>
     ${nr1} - ${nr2} = ${sub} <br>
     ${nr1} * ${nr2} = ${mult} <br>
     ${nr1} / ${nr2} = ${div} <br>
     ${nr1} % ${nr2} = ${sobra} <br>
     ${nr1} ** ${nr2} = ${exp} <br>
    `
}
