function botaoverificar(){
    var nrSorteado = parseInt(Math.random() * 60) + 1

    for (let i = 1; i <= 6; i++) {
    document.getAnimations("resultado").innerHTML +=
    `${nrSorteado}`
    }



}