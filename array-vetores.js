//Criando um array vazio 
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 8, 5, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'SESI', true]

//Acessando os dados de um vetor
console.log (nomes[1])
console.log (novoVector [1])

var frutas = ['Maçã', 'Laranja', 'Pera', 'Morango', 'Uva']

for (var i = 0; i < frutas.length; i++){
    console.og (frutas [i])
}

frutas.push ('Abacaxi')
for (var i = 0; i < frutas.length; i++){
    console.log (frutas [i])
}
var novaListaFrutas = []
novaListaFrutas.push('Limão')
novaListaFrutas.push('Melancia')
console.log(novaListaFrutas)

novaListaFrutas[0] = 'Mel'
//Criando um arry vazio
var meuVetor = {}

//Para lermos todos os elementos de um vetor, podemos
//também utilizar o -- for in -- como o exemplo abaixo
for (var pos in frutas){
    console.log (frutas)
}

//O método forEach - significa para cada item do vetor
//dentro do pareteses colocamos a variável que irá
//receber o conteúdo de cada linha do vetor
//e com o => {informamos o bloco que irá executar para
//cada linha
frutas.forEach(item => {
    console.log ('Item pelo forEach', item)
} )
//Quando precisamos de índice também o colocamos entre
//assim como no exemplo abaixo
frutas.forEach((item, indice) => {
    console.log ('Item pelo forEach', item)
} )
