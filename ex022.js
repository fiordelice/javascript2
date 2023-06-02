var filmes = []
var images = []
function veri() {
    document.getElementById("aprv").innerHTML = ''
    var nomes = document.getElementById('in').value
    var ima = document.getElementById('img').value
    filmes.push(nomes)
    images.push(ima)
    document.getElementById('aprv')
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("aprv").innerHTML += `<img src="${images[i]}"> <br> ${filmes[i]}`
}
  } 