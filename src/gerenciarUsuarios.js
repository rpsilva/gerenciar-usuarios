const usuarios = ['matheus', 'marcos', 'lucas', 'joão'];

function retornarUsuarios () {
    return usuarios;
}

//no js se temos algo fora do escopo, ele pode ser utilizado dentro do escopo
//ex.: o const usuarios pode ser utilizado dentro do escopo {}

function adicionarNovoUsuario(nome){
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}