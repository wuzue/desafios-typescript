enum Trabalho {
	Mecanico,
	Barbeiro
}

type Pessoa = {
	nome: string,
	idade: number,
	profissao: Trabalho
}

let pessoa1: Pessoa = {
	nome: 'Renan',
	idade: 22,
	profissao: Trabalho.Mecanico
};

let pessoa2: Pessoa = {
	nome: 'JP',
	idade: 13,
	profissao: Trabalho.Barbeiro
};


