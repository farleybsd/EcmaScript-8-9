const nome = 'Farley'
const sobrenome = 'Rufino'

//Pad Satart
const nomecompletoInterpolacao = `${nome} ${sobrenome}`
const nomecompletodedfault = nome + `` + sobrenome
const nomecompletoStringPadding = sobrenome.padStart(12,nome)


document.getElementById('stringpad').innerHTML =
nomecompletoStringPadding;


//Pad End
const nomeCompletoPadEnd = nome.padEnd(12,sobrenome)

document.getElementById('stringpadEnd').innerHTML =
nomeCompletoPadEnd;

// Cartao
 const numeroCartao = '4890'

 document.getElementById('numeroCartao').innerHTML =
 numeroCartao.padStart(16,'*')