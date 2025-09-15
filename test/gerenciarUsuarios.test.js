const{ retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const {expect} = require('chai');

describe('Testar as funções de Gestão de Usuários', function() {
    it('Validar que posso adicionar um novo nome de usuário na lista', function() {
        //1. Adicioanr um novo nome na lista de usuários
       // adicionarNovoUsuario('Maria');
       adicionarNovoUsuario({
            nome: 'Maria',
            email:'maria@teste.com'
       });


        //2. Retonar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim da lista de usuários
        //expect(listaDeUsuarios.at(-1)).to.equal('Maria'); //(-1) traz o ultimo item da lista

        expect(listaDeUsuarios.at(-1.)).to.eql({
            nome: 'Maria',
            email: 'maria@teste.com'

    });

  });

});