/*class Usuario {
    private id: number;
    private nome: string;
    private mensagensRecebidas: Mensagem[] = [];

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public receberMensagem(mensagem: Mensagem): void {
        this.mensagensRecebidas.push(mensagem);
    }

    public verMensagens(): void {
        console.log(`Mensagens recebidas por ${this.nome}: `);
        this.mensagensRecebidas.forEach(mensagem => {
            console.log(`De: ${mensagem.getRemetente().getNome()}, Conteúdo: ${mensagem.getConteudo()}`);
        });
    }
}

class Mensagem {
    private remetente: Usuario;
    private destinatario: Usuario;
    private conteudo: string;

    constructor(remetente: Usuario, destinatario: Usuario, conteudo: string) {
        this.remetente = remetente;
        this.destinatario = destinatario;
        this.conteudo = conteudo;
    }

    public getRemetente(): Usuario {
        return this.remetente;
    }

    public getConteudo(): string {
        return this.conteudo;
    }
}

class RedeSocial {
    private usuarios: Usuario[] = [];

    public registrarUsuario(nome: string): Usuario {
        const id = this.usuarios.length + 1;
        const usuario = new Usuario(id, nome);
        this.usuarios.push(usuario);
        return usuario;
    }

    public enviarMensagem(remetente: Usuario, destinatario: Usuario, conteudo: string): void {
        const mensagem = new Mensagem(remetente, destinatario, conteudo);
        destinatario.receberMensagem(mensagem);
    }

    public listarUsuarios(): void {
        console.log("Usuários registrados:");
        this.usuarios.forEach(usuario => {
            console.log(`ID: ${usuario['id']}, Nome: ${usuario.getNome()}`);
        });
    }
}

const redeSocial = new RedeSocial();

const usuario1 = redeSocial.registrarUsuario("ana");
const usuario2 = redeSocial.registrarUsuario("jonatas");

redeSocial.enviarMensagem(usuario1, usuario2, "Oi Bob, como vai?");
redeSocial.enviarMensagem(usuario2, usuario1, "Oi Alice, estou bem e você?");

usuario1.verMensagens();
usuario2.verMensagens();*/



class conta {
private id: number;
private nome: string;
private seguidores: conta[] = [];
private seguindo: conta[] = [];

constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
}

public getNome(): string {
    return this.nome;
}

public seguir(usuario: conta): void {
    if (!this.seguindo.includes(usuario)) {
        this.seguindo.push(usuario);
        usuario.adicionarSeguidor(this);
        console.log(`${this.nome} agora está seguindo ${usuario.getNome()}`);
    } else {
        console.log(`${this.nome} já está seguindo ${usuario.getNome()}`);
    }
}

public deixarDeSeguir(usuario: conta): void {
    const index = this.seguindo.indexOf(usuario);
    if (index !== -1) {
        this.seguindo.splice(index, 1);
        usuario.removerSeguidor(this);
        console.log(`${this.nome} deixou de seguir ${usuario.getNome()}`);
    } else {
        console.log(`${this.nome} não está seguindo ${usuario.getNome()}`);
    }
}

public listarSeguidores(): void {
    console.log(`Seguidores de ${this.nome}: `);
    if (this.seguidores.length === 0) {
        console.log("Nenhum seguidor.");
    } else {
        this.seguidores.forEach(seguidor => {
            console.log(seguidor.getNome());
        });
    }
}

public listarSeguindo(): void {
    console.log(`${this.nome} está seguindo: `);
    if (this.seguindo.length === 0) {
        console.log("Não está seguindo ninguém.");
    } else {
        this.seguindo.forEach(seguido => {
            console.log(seguido.getNome());
        });
    }
}

private adicionarSeguidor(usuario: conta): void {
    this.seguidores.push(usuario);
}

private removerSeguidor(usuario: conta): void {
    const index = this.seguidores.indexOf(usuario);
    if (index !== -1) {
        this.seguidores.splice(index, 1);
    }
}
}

class GerenciadorDeSeguidores {
private usuarios: conta[] = [];

public registrarUsuario(nome: string): conta {
    const id = this.usuarios.length + 1;
    const usuario = new conta(id, nome);
    this.usuarios.push(usuario);
    return usuario;
}

public listarUsuarios(): void {
    console.log("Usuários registrados:");
    this.usuarios.forEach(usuario => {
        console.log(`ID: ${usuario['id']}, Nome: ${usuario.getNome()}`);
    });
}
}

const gerenciador = new GerenciadorDeSeguidores();

const usuario1 = gerenciador.registrarUsuario("ana");
const usuario2 = gerenciador.registrarUsuario("jonatas");
const usuario3 = gerenciador.registrarUsuario("Carol");

usuario1.seguir(usuario2); 
usuario1.seguir(usuario3); 

usuario1.listarSeguindo(); 
usuario2.listarSeguidores(); 

usuario1.deixarDeSeguir(usuario2); 
usuario1.listarSeguindo(); 




class User {
    constructor(public username: string, public fullName: string) {}
}

class foto {
    constructor(
        public fotoId: number,
        public user: User,
        public descricao: string,
        public imagemUrl: string,
        public data: Date
    ) {}
}

class fotofeed {
    private fotos: foto[] = [];

    addfoto(foto: foto): void {
        this.fotos.push(foto);
    }

    Feed(): void {
        if (this.fotos.length === 0) {
            console.log("O feed está vazio.");
        } else {
            this.fotos.forEach(foto => {
                console.log(`[${foto.data.toLocaleString()}] ${foto.user.username} (${foto.user.fullName})`);
                console.log(`Descrição:  ${foto.descricao}`);
                console.log(`URL da imagem: ${foto.imagemUrl}`);
                console.log("--------------------------------------------------");
            });
        }
    }
}

const user1 = new User("faustão", "zé felipe");
const user2 = new User("bolsonaro", "leandrinha");

const photo1 = new foto(1, user1, "descriçao da foto", "http://examplo.com/foto.jpg", new Date());
const photo2 = new foto(2, user2, "descriçao da foto", "http://examplo.com/foto.jpg", new Date());

const feed = new fotofeed();
feed.addfoto(photo1);
feed.addfoto(photo2);
feed.Feed();

