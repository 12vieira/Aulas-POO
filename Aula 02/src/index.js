import prompt from 'prompt-sync';
import { AlunoView } from './modulos/Aluno/views/index.js';
import { TurmaView } from './modulos/Turma/views/index.js';
import { ProfessorView } from './modulos/Professor/views/index.js';

const alunoView = new AlunoView();
const turmaView = new TurmaView();
const professorView = new ProfessorView();
const input = prompt();
 
function menuInicial(){
    console.log("\n+-----------------------------------+");
    console.log("| Menu Principal                    |"),
    console.log("+-----------------------------------+"),
    console.log('|1 - Módulo Aluno                   |');
    console.log('|2 - Módulo Turma                   |');
    console.log('|3 - Módulo Professor               |');
    console.log('|0 - Sair                           |');
    console.log('|+----------------------------------+')
}
function exibirMenuAluno() {
    console.log("\n+-----------------------------------+");
    console.log("| Menu Aluno                        |"),
    console.log("+-----------------------------------+"),
    console.log("|1 - Criar Novo Aluno               |",);
    console.log("|2 - Listar Todos os Alunos         |");
    console.log("|3 - Excluir por Matrícula          |");
    console.log('|4 - Excluir Todos os Alunos        |');
    console.log('|5 - Editar Aluno por Matrícula     |');
    console.log('|0 - Retornar ao Menu Principal     |');
    console.log('+-----------------------------------+')
}
function exibirMenuProfessor() {
    console.log("\n+-----------------------------------+");
    console.log("| Menu Professor                    |"),
    console.log("+-----------------------------------+"),
    console.log("|1 - Criar Novo Professor           |",);
    console.log("|2 - Listar Todos os Professores    |");
    console.log("|3 - Excluir por Matrícula          |");
    console.log('|4 - Excluir Todos os Professores   |');
    console.log('|5 - Editar Professor por Matrícula |');
    console.log('|0 - Retornar ao Menu Principal     |');
    console.log('+-----------------------------------+')
}
function exibirMenuTurma() {
    console.log("\n+-----------------------------------+");
    console.log("| Menu Turma                        |"),
    console.log("+-----------------------------------+"),
    console.log("|1 - Criar Nova Turma               |",);
    console.log("|2 - Listar Todas as Turmas         |");
    console.log("|3 - Excluir por Código             |");
    console.log('|4 - Excluir Todas as Turmas        |');
    console.log('|5 - Editar Turma por Código        |');
    console.log('|0 - Retornar ao Menu Principal     |');
    console.log('+-----------------------------------+')
}
function mainTurma() {
    let controle;
    do {
        exibirMenuTurma();
        controle = input('Escolha uma opção: ');
        switch (controle) {
            case '1':
                turmaView.criarTurma()
                break;
            case '2':
                turmaView.listarTurmas()
                break;
            case '3':
                turmaView.excluirPorCod()
                break;
            case '4':
                turmaView.excluirTodos()
                break;
            case '5':
                turmaView.editarTurma()
                break;
            case '0':
                console.log('Retornando...');
                menuInicial();
                break;
            default:
                console.log('Opção invalida, digite um numero do menu!');
        }
    } while (controle !== '0');
}

function mainAluno() {
    let controle;
    do {
        exibirMenuAluno();
        controle = input('Escolha uma opção: ');
        switch (controle) {
            case '1':
                alunoView.criarAluno()
                break;
            case '2':
                alunoView.listarAlunos()
                break;
            case '3':
                alunoView.excluirPorMatricula()
                break;
            case '4':
                alunoView.excluirTodos()
                break;
            case '5':
                alunoView.editarAluno()
                break;
            case '0':
                console.log('Retornando...');
                menuInicial();
                break;
            default:
                console.log('Opção invalida, digitte um numero do menu!');
        }
    } while (controle !== '0');
}
function mainProfessor() {
    let controle;
    do {
        exibirMenuProfessor();
        controle = input('Escolha uma opção: ');
        switch (controle) {
            case '1':
                professorView.criarProfessor()
                break;
            case '2':
                professorView.listarProfessores()
                break;
            case '3':
                professorView.excluirPorMatricula()
                break;
            case '4':
                professorView.excluirTodos()
                break;
            case '5':
                professorView.editarProfessor()
                break;
            case '0':
                console.log('Retornando...');
                menuInicial();
                break;
            default:
                console.log('Opção invalida, digitte um numero do menu!');
        }
    } while (controle !== '0');
}
function mainMenu() {
    let controle;
    do {
        menuInicial();
        controle = input('Escolha uma opção: ');
        switch (controle) {
            case '1':
                mainAluno()
                break;
            case '2':
                mainTurma()
                break;
            case '3':
                mainProfessor()
                break;
            case '0':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção invalida, digitte um numero do menu!');
        }
    } while (controle !== '0');
} mainMenu();


