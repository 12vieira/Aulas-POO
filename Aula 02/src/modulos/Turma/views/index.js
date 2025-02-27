import prompt from "prompt-sync";
import { TurmaController } from "../controllers/index.js";
import { AlunoView } from "../../Aluno/views/index.js";
import { ProfessorView } from "../../Professor/views/index.js";


const alunoView = new AlunoView();
const professorView = new ProfessorView();
const turmaController = new TurmaController();

const input = prompt();

export class TurmaView{
    listarTurmas() {
        console.log("\nLista de Turmas:");
        turmaController.listarTodos()
      }
      criarTurma() {
        const cod = input("Digite o código: ");
        const nome = input("Digite o nome: ");
        const sala = input("Digite a sala: ");
        const capacidade = input("Digite a capacidade: ");
        const totalAlunos = input("Quantos alunos deseja adicionar a essa turma? ")
        const students = [];
        const aluno = []
        for (let i = 0; i < totalAlunos; i++) {
            students[i] = alunoView.criarAluno().matricula;
            aluno.push(students[i]); 
        }
        const totalProfessores = input("Quantos professores deseja adicionar a essa turma? ")
        const teachers = [];
        const professor = [];
        for (let j = 0; j < totalProfessores; j++) {
          teachers[i] = professorView.criarProfessor().matricula;
          professor.push(teachers[i]);
        }
        turmaController.criar(cod, nome, sala, capacidade, aluno, professor);
      }
      editarTurma() {
        const codEditar = input("Digite o código do Turma: ");
        const novoNome = input("Novo nome (deixe em branco para manter o mesmo): ") || null;
        const novaSala = input("Nova sala (deixe em branco para manter a mesma): ") || null;
        const novaCapacidade = input("Nova capacidade (deixe em branco para manter a mesma): ") || null;
        turmaController.editar(codEditar, novoNome, novaSala, novaCapacidade, novoAluno, novoPofessor);
      }
      excluirPorCod() {
        const codDeletar = input("Digite o código da Turma a ser deletado: ");
        turmaController.deletarPorCod(codDeletar);
      }
      excluirTodos(){
        turmaController.deletarTodos()
      }
}