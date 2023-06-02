var nrSorteando = parseInt(Math.random() * 100)
alert(nrSorteando)
var tentativas  = 0

function botaoverificar() {
    var chute = prompt("Qual o numero sorteado ? ")

    tentativas++

    if (nrSorteando == chute) {
        document.getElementById("resultado").innerHTML += `Parabéns voce acertou no Nº ${nrSorteando}EM ${tentativas} TENTATIVAS <br>`
    }
    else if (nrSorteando < chute) {
        document.getElementById("resultado").innerHTML += `Voce chutou ${chute} Pensei em um numero MENOR`

    } else if (nrSorteando > chute) {
        document.getElementById("resultado").innerHTML += `Voce chutou ${chute} Pensei em um numero MAIOR`

    }
}

function limpar() {
    document.getElementById("resultado").innerHTML = " "
    nrSorteando = parseInt(Math.random() * 100)
}