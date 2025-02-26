import { professores } from "../../../config/database.js";
import { ProfessorModel } from "../models/index.js";

export class ProfessorController {
    criar(turma, disciplina, matricula, nome, email, telefone, senha){
        try {
            const novoProfessor = new ProfessorModel(turma, disciplina, matricula, nome, email, telefone, senha);
            professores.push(novoProfessor);
            console.table(novoProfessor);
        } catch (error) {
            console.log("Erro ao tentar criar professor", error.message);
        }
    }
    editar(novaTurma, novaDisciplina, matricula, novoNome, novoEmail, novoTelefone, novaSenha){
        try {
            const professor = professores.find((professor) =>  professor.getMatricula === matricula);
            if(!professor){
                return console.log("Professor não encontrado! ");
            }
            professor.turma = novaTurma || professor.turma;
            professor.disciplina = novaDisciplina || professor.disciplina;
            professor.nome = novoNome || professor.nome
            professor.email = novoEmail || professor.email
            professor.telefone = novoTelefone || professor.telefone;
            professor.senha = novaSenha || professor.senha;
        } catch (error) {
            console.log("Erro ao tentar editar professor! ", error.message)
        }
    }
    deletarPorMatricula(matricula){
        try {
            const index = professores.findIndex((professor) => professor.getMatricula === matricula);
            if(index === -1){
                return console.log("Professor não encontrado");
            }
            professores.splice(index, 1);
            console.log("Professor excluído com sucesso! ");
        } catch (error) {
            console.log("Erro ao tentar excluir o professor! ")
        }
    }
    deletarTodos(){
        try {
            professores.length = 0;
            console.log("Todos os alunos excluídos! ");
        } catch (error) {
            console.log("Erro ao tentar excluir todos os professores", error.message);
        }
    }
    listaPorMatricula(matricula) {
        try {
          const professor = professores.find((professor) => professor.getMatricula === matricula);
          if (!professor) {
            return console.log("Professor não encontrado");
          }
          console.table(professor);
        } catch (error) {
          console.error("Erro ao tentar exibir o professor", error.message);
        }
      }
      
      listarTodos() {
        try {
          if (professores.length === 0) {
            return console.log("Não existe professores a serem exibidos!");
          }
          console.table(professores);
        } catch (error) {
          console.error("Erro ao tentar exibir os professores", error.message);
        }
      }
}