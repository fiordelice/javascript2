function botaoverificar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("Idade").value

    debugger

    if (idade >= 18 && idade <=70) {
        document.getElementById("resultados").innerHTML = ` ${nome}, você é obrigado a votar` 
    } else if (idade >=16 && idade <18 || idade >70) {
        document.getElementById("resultados").innerHTML = `${nome}, você pode votar, mais NÃO é obrigado `
    } else {
        document.getElementById("resultados").innerHTML = `${nome}, você não pode votar`
    }
    
}