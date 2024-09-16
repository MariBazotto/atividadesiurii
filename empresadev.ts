class Programador {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    trabalhar(): void {
    }
}

class Junior extends Programador {
    constructor(nome: string) {
        super(nome);
    }

    trabalhar(): void {
        console.log(`${this.nome} (Júnior) deve resolver bugs.`);
    }
}

class Pleno extends Programador {
    constructor(nome: string) {
        super(nome);
    }

    trabalhar(): void {
        console.log(`${this.nome} (Pleno) deve criar novas features.`);
    }
}
class Senior extends Programador {
    constructor(nome: string) {
        super(nome);
    }

    trabalhar(): void {
        console.log(`${this.nome} (Senior) deve administrar a equipe.`);
    }
}

class EmpresaDev {
    programadores: Programador[] = [];

    adicionarProgramador(programador: Programador): void {
        this.programadores.push(programador);
    }

    iniciarTrabalho(): void {
        this.programadores.forEach(programador => programador.trabalhar());
    }
}

const empresa = new EmpresaDev();

const junior = new Junior("gaby");
const pleno = new Pleno("lola");
const senior = new Senior("jose");

empresa.adicionarProgramador(junior);
empresa.adicionarProgramador(pleno);
empresa.adicionarProgramador(senior);

empresa.iniciarTrabalho();