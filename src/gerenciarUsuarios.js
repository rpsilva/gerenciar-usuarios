//const usuarios = ['matheus', 'marcos', 'lucas', 'joão'];

const usuarios =
 [
		    {
			nome: 'Matheus',
			email: 'matheus@teste.com',
	        },
            {
			nome: 'Marcos',
			email: 'matheus@teste.com',
	        },
            {
			nome: 'Lucas',
			email: 'matheus@teste.com',
	        },
            {
			nome: 'João',
			email: 'matheus@teste.com',
	        }
]


function retornarUsuarios () {
    return usuarios;
}

//no js se temos algo fora do escopo, ele pode ser utilizado dentro do escopo
//ex.: o const usuarios pode ser utilizado dentro do escopo {}

/** 
function adicionarNovoUsuario(nome){
    usuarios.push(nome);
} */


function adicionarNovoUsuario(usuario){
    usuarios.push(usuario);
}


module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}