function tabelaAlimentos(){

    const tabelas = {
          alimentos: {
              1 : {nome:'Feijão'},
              2 : {nome: 'Arroz'},
              3 : {nome : 'Batata'}
          }
    } 
    return {

        get : (nome , id) => tabelas[nome][id]
    }

}

const tabela = tabelaAlimentos()