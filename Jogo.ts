let reader = require('readline-sync')

interface JogoDois{
    tituloJogo: string
    generoJogo: string
    classificacaoEtariaJogo: number
}

class Jogo implements JogoDois{
    tituloJogo: string
    generoJogo: string
    classificacaoEtariaJogo: number

    constructor(tituloNovo: string, generoNovo: string, classificacaoEtariaNovo: number){
        this.tituloJogo = tituloNovo
        this.generoJogo = generoNovo
        this.classificacaoEtariaJogo = classificacaoEtariaNovo
    }

    public getDetalhes(): void{
        console.log(`Título: ${this.tituloJogo}
                     Genero: ${this.generoJogo}
                     Classificação Etária: ${this.classificacaoEtariaJogo}`)
    }

    public setDetalhes(): void{
        let tituloAtualizar = reader.question("Insira o título do jogo: ")
        let generoAtualizar = reader.question("Insira o genero do jogo: ")
        let classificacaoEtariaAtualizar = reader.questionInt("Insira a classificação etária: ")

        this.tituloJogo = tituloAtualizar
        this.generoJogo = generoAtualizar
        this.classificacaoEtariaJogo = classificacaoEtariaAtualizar
    }
}

class JogoEletronico extends Jogo{
    protected plataformaJogo: string

    constructor(tituloNovo: string, generoNovo: string, classificacaoEtariaNovo: number, plataformaNovo: string){
        super(tituloNovo, generoNovo, classificacaoEtariaNovo)
        this.plataformaJogo = plataformaNovo
    }

    public getDetalhes(): void{
        console.log(`Título: ${this.tituloJogo}
                     Genero: ${this.generoJogo}
                     Classificação Etária: ${this.classificacaoEtariaJogo}
                     Plataforma: ${this.plataformaJogo}`)
    }

    public setDetalhes(): void{
        let tituloAtualizar = reader.question("Insira o título do jogo: ")
        let generoAtualizar = reader.question("Insira o genero do jogo: ")
        let classificacaoEtariaAtualizar = reader.questionInt("Insira a classificação etária: ")
        let plataformaAtualizar = reader.question("Insira a plataforma do jogo: ")

        this.tituloJogo = tituloAtualizar
        this.generoJogo = generoAtualizar
        this.classificacaoEtariaJogo = classificacaoEtariaAtualizar
        this.plataformaJogo = plataformaAtualizar
    }
}

class JogoDeTabuleiro extends Jogo{
    protected numeroJogadores: number

    constructor(tituloNovo: string, generoNovo: string, classificacaoEtariaNovo: number, numeroJogadoresNovo: number){
        super(tituloNovo, generoNovo, classificacaoEtariaNovo)
        this.numeroJogadores = numeroJogadoresNovo
    }

    public getDetalhes(): void{
        console.log(`Título: ${this.tituloJogo}
                     Genero: ${this.generoJogo}
                     Classificação Etária: ${this.classificacaoEtariaJogo}
                     Num. Jogadores: ${this.numeroJogadores}`)
    }

    public setDetalhes(): void{
        let tituloAtualizar = reader.question("Insira o título do jogo: ")
        let generoAtualizar = reader.question("Insira o genero do jogo: ")
        let classificacaoEtariaAtualizar = reader.questionInt("Insira a classificação etária: ")
        let numJogadoresAtualizar = reader.questionInt("Insira a quantidade de jogadores: ")

        this.tituloJogo = tituloAtualizar
        this.generoJogo = generoAtualizar
        this.classificacaoEtariaJogo = classificacaoEtariaAtualizar
        this.numeroJogadores = numJogadoresAtualizar
    }
}

class BibliotecaDeJogos{
    public jogos: Jogo[]

    constructor(){
        this.jogos = []
    }

    public adicionarJogo(jogo: Jogo): void{
        this.jogos.push(jogo)
    }

    public removerJogo(): void{
        this.listarJogos()
        let tituloExcluir = reader.question("Qual título deseja excluir: ")
        this.jogos = this.jogos.filter(objJogo => objJogo.tituloJogo !== tituloExcluir)
    }

    public listarJogos(): void{
        console.log(this.jogos)
    }
}

/*
let reddead = new Jogo("red", "aventura", 16)
let supermeatboy = new Jogo("super meat", "plataforma", 16)
let estante = new BibliotecaDeJogos()

estante.adicionarJogo(reddead)
estante.adicionarJogo(supermeatboy)
estante.removerJogo()
console.log(estante);
*/