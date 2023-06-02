 /*
  Comentários em 
  multiplas linhas
  */
  //Comentário em uma única linha

  //O alert é utilizado para exibir uma mensagem em popup
  //alert("Olá mundo!!!")

  //No console conseguimos visualizar infomações sem exibir na página
  console.log("Olá mundo, estou utilizando o console")


  console.error("ESta é uma mensagem de erro")
  console.warn("ESta é uma mensagem de alerta")
  console.info("ESta é uma mensagem de informação")


  //Criando uma função chamada quando clicamos no botão
  //o nome da função tem que ser igual ao do evento onclick
  function Botão1() {
    alert("Voce clicou no botão")
  }

  function BotaoCorFundo() {
    document.body.style.backgroundColor = "pink"
  }

  function BotaoNome() {
    var nome2 = prompt("Qual é o seu nome?")
    confirm("Olá " + nome2 + ", entendeu variável")
    confirm('Olá ${ nome2} + , entendeu variável')
  }

  //Declando variáveis
  //String - Conjunto de caracteres - Declarar com "" ou ''
  var nome = "Gabriella"
  var sobrenome = "Fiordelice"
  //Number - Todo número em JS é do tipo Number -
  //Declarar sem ""
  var idade = 16
  //Boolean - Somente recebe true ou false
  var aprovado = true

  //Utilizamos o typeof para saber o tipo do dado
  console.log(typeof nome)
  //Concatenando strings com o +
  console.log(nome + ' ' + sobrenome)

  var n1 = 10
  var n2 = 15
  //Irá somar as 2 variaveis number (25)
  console.log(n1 + n2)
  var n3 = "10"
  var n4 = "15"
  //Irá concatenar "juntar" as 2 variáveis ("1015")
  console.log(n3 + n4)
  //Se utilizarmos o + com string ele concatena se
  //utilizar com number soma

  //Uma variável pode receber o valor de outra variável
  n1 = n2
  console.log("n1 = " + n1 + 'e o n2 =' + n2)

  //Para atribuir um valor decimal utiliza . não ,
  var salario = 1290.85
  //Posso também somar a variável com ela mesmo
  salario = salario + 200
  console.log(salario)

  //Antigamente para juntar texto e variáveis faziamos assim
  console.log('Olá,' + nome + ' voce tem ' + idade + 'anos')
  //Hoje utilizamos o TemplateString forma mais simples
  console.log(`Olá, ${nome} voce tem ${idade} anos`)

  function BotaoSomar() {
    var nr1 = prompt("Digite um número:")
    var nr2 = prompt("Digite outro número")


    console.log(typeof nr1)

    nr1 = parseFloat(nr1)
    nr2 = Number(nr2)

    console.log(typeof nr1)
    var soma = nr1 + nr2

    //alert(soma)
    document.getElementById("res-soma").innerHTML +=

       ` <br>A soma de ${nr1} + ${nr2} = ${soma}`
       
      }
      function BotaoCidade(){
        var cidade = document.getElementById("cidade").value 
        document.getElementById("resultadoCidade").innerHTML
        `<br> O nome da cidade ${cidade}`
            }
      
    //Operadores Aritméticos e Ordem de precedencia
    var opSoma = 5 + 2 //Operador de soma +
    console.log(opSoma) // 7
    var opSubtracao = 5 - 2 //Operador de subtração -
    console.log(opSubtracao) // 3
    var opMultiplicacao = 5 * 2 //Operador de mutiplição *
    console.log(opMultiplicacao) // 10
    var opDivisão = 5 / 2 //Operador de divisão /
    console.log(opDivisão) // 2.5
    var opExponenciacao = 5 ** 2 //Operador de exponenciação **
    console.log(opExponenciacao) // 25
    var opResto = 5 % 2 //Operador de resto da divisão %
    console.log(opResto) // 1
    //Ordem de precedencia
    var ordemPrecedencial1 = 5 + 3 / 2
    console.log(ordemPrecedencial1) // 6.5
    var ordemPrecedencial2 = (5 + 3) / 2
    console.log(ordemPrecedencial2) // 4
    /* 1º()
       2º **
       3º * /
       4º %
       5º + -
    */
  //Constantes - o valor não pode ser alterado depois de atribuído
  const pi = 3.14
  //pi = 3 - Se o valor for alterado dará erro no Javascript

  //Auto atribuição
  var n = 3
  n = n + 3 //a variável recebe ela mesmo + 3
  n += 3 //quer dizer o mesmo que a expressão acima

  n++ //quando precisamos somar + 1 ao valor da variável
  n-- //quando precisamos subtrair -1 ao valor da variável

  //Operadores Relacionais
  var n1 = 5
  var n2 = 6
  console.log(n1 > n2)//Maior que
  console.log(n1 < n2)//Menor que
  console.log(n1 >= n2)//Maior ou igual que
  console.log(n1 <= n2)//Menor ou igual que
  console.log(n1) == n2//Igual
  console.log(n1 != n2)// != Não igual - Diferente

  //Estruturas condicionais
  if (n1 > n2){    //Verificando a condição entre paranteses
           //Se a condição for verdadeira "entra" nesse bloco
           console.log("O n1 é maior que o n2")
}else {
        //Se a condição for verdadeira "entra" nesse bloco
        console.log ("O n1 não é maior que o n2")
}

//Exemplo de condição
var minhaIdade =18
if(minhaIdade >=16){
  console.log ("Voce pode voltar")
} else{
  console.log ("Voce NAO pode voltar")
}

if(caneta1 == "vermelho" && caneta2 == "azul"){
  //feliz
} else {
  //triste
}
//Operadores Lógicos
// && representa o E
var login = "adm"
var senha = "123"
//Para entrar na condição TRUE as condições precisar ser verdadeira
if (login == "adm" && senha == "123"){
  //Executa esse bloco quando as condições são TRUE
} else {
  //Executa esse bloco se pelo menos 1 condições for FALSE
}

var media = 6 
//Operador OU -> || (pipe)
//Para entrar na condições TRUE pelo menos 1 condição precisa ser verdadeiro 
if (media == 6 || media == 5 ) {
  //Executa esse bloco quando 1 condição é TRUE pelo menos
} else {
    //Aqui entra se 
}
//Para sortearmos um valor aleatório utilizamos o Math.random()
//O Math.random retorna um número decimal e precisamos multiplicar pelo nr
//máximo que desejos 
//o parseInt utilizamos para obter apenas a parte inteira do número
var nrSorteado = parseInt(Math.random() * 100)
console.log(nrSorteado)
//Switch Case
//é como se fosse vários if else de forma mais simples
var diaSemana = 3 
switch (diaSemana) {
    case 1:
      console.log("Hoje é: Domingo")
      break  //para o switch case e não verifica as outras opções
      case 2:
      console.log("Hoje é: Segunda")
      case 3:
      console.log("Hoje é: Terça")
      case 4:
      console.log("Hoje é: Quarta")
      case 5:
      console.log("Hoje é: Quinta")
      case 6:
      console.log("Hoje é: Sexta")
      case 7:
      console.log("Hoje é: Sabado")
      default:
      console.log("Dia invalido")
}

//For - laço de repetição
//1
for (var i = 1; i <= 10; i++ ){


  //Verificando se número é par com while
  var contador = 1 //Iniciando o contador de vezes que irá executar
  while (contador <= 10){ //Enquanto a condição for verdadeira
    if (contador <= 10) {

    }
      console.log (`${contador} é par`)
    }
}

var cont = 1 
while (cont <= 5){
  console.log (cont)
  cont++
}

for (var cont = 1; cont <= 5; cont++){
  console.log(cont)
}