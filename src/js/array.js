const aprovados = ["Marcelo","Aline","Farley","Ricardo"]

for(let nomes of aprovados){
    if(nomes === "Marvio"){
        console.log('Aprovado')
        
    }
    else{
        console.log("Reprovado")
    }
}

console.log(aprovados.indexOf('Marvio'))

const nomeAprovado = aprovados.includes("Teste")

if(nomeAprovado){
    console.log('Voçê foi Aprovado')
}
else{
    console.log('Voçê Não Foi Aprovado')
}