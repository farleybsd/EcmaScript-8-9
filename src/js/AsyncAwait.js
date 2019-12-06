(async   function asyncListaLivros(){

  const resposta = await  fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
  const dados =  await resposta.json()
  console.log(dados)

})()

