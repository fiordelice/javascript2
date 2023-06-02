function botaogerar(){
    var inicio = document.getElementById(`numero`).value
    inicio = Number (inicio)
    for (var numero = 1; numero <= inicio; numero++)
    document.getElementById("resultados").innerHTML += `<img src="../imagem/"png-transparent-heart-red-heart-thumbnail.png" alt="">`
}
