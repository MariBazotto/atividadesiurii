
import promptSync from 'prompt-sync';
const prompt = promptSync(); 

class Tarefa {
    descricao: string;
    prioridade: number;
    status: string;

    constructor(descricao: string, prioridade: number = 0) {
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.status = 'Pendente';
    }

    exibirTarefa(): string {
        return `Tarefa: ${this.descricao} | Prioridade: ${this.prioridade} | Status: ${this.status}`;
    }

    marcarConcluida(): void {
        this.status = 'Concluída';
    }
}

class FilaDeTarefas {
    private tarefas: Tarefa[] = [];

    adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
        console.log('Tarefa adicionada com sucesso.');
    }

    removerTarefa(): Tarefa | null {
        if (this.tarefas.length === 0) {
            console.log('Nenhuma tarefa para remover.');
            return null;
        }
        const tarefaRemovida = this.tarefas.shift();
        console.log(`Tarefa removida: ${tarefaRemovida?.exibirTarefa()}`);
        return tarefaRemovida || null;
    }

    listarTarefas(): void {
        if (this.tarefas.length === 0) {
            console.log('Nenhuma tarefa na fila.');
        } else {
            console.log('\nLista de Tarefas:');
            this.tarefas.forEach((tarefa, index) => {
                console.log(`${index + 1}: ${tarefa.exibirTarefa()}`);
            });
        }
    }

    tarefaPronta(): void {
        if (this.tarefas.length === 0) {
            console.log('Nenhuma tarefa para marcar como concluída.');
        } else {
            this.tarefas[0].marcarConcluida();
            console.log('Primeira tarefa marcada como concluída.');
        }
    }
}

const filaDeTarefas = new FilaDeTarefas();

let opcao: string;
do {
    console.log('\nMenu de Tarefas:');
    console.log('1 - Adicionar Tarefa');
    console.log('2 - Remover Tarefa');
    console.log('3 - Listar Tarefas');
    console.log('4 - Marcar Primeira Tarefa como Concluída');
    console.log('5 - Sair');

    opcao = prompt('Escolha uma opção: '); // Coleta a entrada do usuário

    switch (opcao) {
        case '1':
            const descricao = prompt('Digite a descrição da tarefa: ');
            const prioridadeInput = prompt('Digite a prioridade (opcional, padrão é 0): ');
            const prioridade = prioridadeInput ? parseInt(prioridadeInput) : 0;
            const tarefa = new Tarefa(descricao, prioridade);
            filaDeTarefas.adicionarTarefa(tarefa);
            break;

        case '2':
            filaDeTarefas.removerTarefa();
            break;

        case '3':
            filaDeTarefas.listarTarefas();
            break;

        case '4':
            filaDeTarefas.tarefaPronta();
            break;

        case '5':
            console.log('Saindo...');
            break;

        default:
            console.log('Opção inválida.');
    }
} while (opcao !== '5');