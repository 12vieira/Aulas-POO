import prompt from "prompt-sync";
import { TurmaController } from "../controllers/index.js";

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