function botaologin(){
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value

   
    
    if(usuario == "adm" && senha == "123"){
        document.getElementById("resultados").innerHTML = `Você conseguiu logar <br> ` 
    } else{
           document.getElementById("resultados").innerHTML = `Usuário ou senha invalido`
    }


}
