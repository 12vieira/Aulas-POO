import prompt from "prompt-sync";
import { ProfessorController } from "../controllers/index.js";

const professorController = new ProfessorController();
const input = prompt();

export class ProfessorView{
    listarProfessores(){
        console.log("\nLista de professores: ");
        professorController.listarTodos();
    }
    criarProfessor(){
        const nome = input("Digite o nome do professor: ");
        const email = input("Digite o email do professor: ");
        const matricula = input("Digite a matricula do professor: ");
        const telefone = input("Digite o telefone do professor: ");
        const senha = input("Digite a senha: ");
        const turma = input("Digite a turma: ");
        const disciplina = input("Digite a disciplina ministrada: ");
        professorController.criar(turma,disciplina,matricula,nome,email,telefone,senha)
    }
    editarProfessor() {
        const matriculaEditar = input("Digite a matrícula do aluno: ");
        const novoNome = input("Novo nome (deixe em branco para manter o mesmo): ") || null;
        const novoEmail = input("Novo email (deixe em branco para manter o mesmo): ") || null;
        const novoTelefone = input("Novo telefone (deixe em branco para manter o mesmo): ") || null;
        const novaSenha = input("Nova senha (deixe em branco para manter a mesma): ") || null;
        const novaTurma = input("Nova turma (deixe em branco para manter a mesma): ") || null;
        const novaDisciplina = input("Nova disciplina (deixe em branco para manter a mesma): ") || null;
        professorController.editar(novaTurma, novaDisciplina, matriculaEditar, novoNome, novoEmail, novoTelefone, novaSenha);
      }
      excluirPorMatricula() {
        const matriculaDeletar = input("Digite a matrícula do professor a ser deletado: ");
        professorController.deletarPorMatricula(matriculaDeletar);
      }
      excluirTodos(){
        professorController.deletarTodos()
      }
}