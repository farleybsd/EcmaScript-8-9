(async   function asyncListaLivros(){

  const resposta = await  fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
  const dados =  await resposta.json()
 
  const items = dados.items.map(item => item)
  const informacoes = items.map(item => item.volumeInfo)
  const titulos = informacoes.map(info => info.title )
  redenrizarLista("asyncListaLivro",titulos)
  
})()

