var listausuario = []
//Buscando as informações do localStorage gravadas no Navegador
//Utilizo o método getItem com o nome exatamente que utilizamos no setItem
listausuario = JSON.parse(localStorage.getItem('bdusuarios'))
if (listausuario == null) {
    listausuario = []
}
exibirusuario()

//Exibindo no console a lista de filmes que carrega no vetor
console.log(listausuario)

function validarCadastro(nome, login, senha, confirmarSenha ) {
    if (nome != '' && login != '' && senha != '' && confirmarSenha != '') {
        return true
    } else {
        return false
    }
}

function Cadastrarusuario() {

    var nome = document.getElementById("nome").value
    var login= document.getElementById("login").value
    var senha = document.getElementById("senha").value
    var confirmarSenha = document.getElementById("confirmarSenha").value
    
    var possoCadastrar = validarCadastro(nome, login, senha, confirmarSenha )
    if (possoCadastrar == false) {
        alert("Verifique se há espaços em branco!!")
        return
    }

    var usuario = {
        nome: nome,
        usuario: login,
        senha: senha
    }
    listausuario.push(usuario)
    //Utilizando o localStorage que irá gravar o nosso vetor de filmes no método setItem, preciso passar
    //como parâmetro o nome do espaço que o navegador irá reservar e passo também o vetor de filmes
    //convertido em formato JSON
    localStorage.setItem( 'bdusuario', JSON.stringify(listausuario))

    exibirusuario()

    document.getElementById("nome").value = ``
    document.getElementById("login").value = ``
    document.getElementById("senha").value = ``
    document.getElementById("confirmarSenha").value = ``
    document.getElementById("nomeusuario").focus()
}


function exibirusuario() {
    // Limpa os filmes que estão carregados na página. Limpa todo o conteúdo da página
    document.getElementById("resultado").innerHTML = ``
    listausuario.forEach((item, indice) => {
        document.getElementById("resultado").innerHTML += `<div>
        <b>Nome:</b> ${item.nome} - <b>Login: </b> ${item.usuario}
        <img src= 'excluir.svg' class= 'excluir'>
    </div>`
    })
    


    //for (var i in listausuario) {
      //      document.getElementById("resultado").innerHTML += `
      //      <p> <b> Nome: </b> ${listausuario[i].nome} - <b> Login: </b> ${listausuario[i].usuario} </p>`
    //}
}

function excluirUsuario(indice){
    listausuario.splice (indice, 1)
    localStorage.setItem( 'bdusuarios', JSON.stringify(listausuario))
    exibirusuario()
}

