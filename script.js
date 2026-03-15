document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault()

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let telefone = document.getElementById("telefone").value
let morada = document.getElementById("morada").value
let nif = document.getElementById("nif").value
let obs = document.getElementById("obs").value



if(nif.length != 9){
alert("NIF inválido")
return
}

console.log("Conta criada com sucesso")
console.log({
nome,
email,
telefone,
morada,
nif,
obs
})

// limpar formulário

document.getElementById("form").reset()

})