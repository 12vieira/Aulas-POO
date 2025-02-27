import { alunos, professores, turmas } from "../../../config/database.js";
import { AlunoModel } from "../../Aluno/models/index.js";
import { TurmaModel } from "../models/index.js";
import { ProfessorModel } from "../../Professor/models/index.js";

export class TurmaController {
    criar(cod, nome, sala, capacidade, matriculaAluno = [], matriculaProfessor = []){
        try {
            
            /*const professoresValidos = matriculaProfessor.every((matricula) => {
            const professor = professores.find((prof) => prof.matricula === matricula);
            return professor && professor instanceof ProfessorModel;
            });
            if (!professoresValidos){
              return console.log("Um ou mmais professores não encontrados ou inválidos")
            }*/     
          
            const aluno = alunos.find((aluno) => aluno.getMatricula === matriculaAluno);
            if (!aluno || !(aluno instanceof AlunoModel)) {
              const alunoNovo = AlunoModel();
              alunoNovo.criar();
              return console.log("Aluno não encontrado ou inválido");
            }
            const professor = professores.find((professor) => professor.getMatricula === matriculaProfessor);
            if (!professor || !(professor instanceof ProfessorModel)) {
              const professorNovo = ProfessorModel();
              professorNovo.criar();
              return console.log("Professor não encontrado ou inválido")
            }
            
            const novaTurma = new TurmaModel(cod, nome, sala, capacidade, aluno, professor);
            turmas.push(novaTurma);
            console.table(novaTurma);
        } catch (error) {
            console.error("Erro ao tentar criar turma", error.message);
        }
    }
    editar(cod, novoNome, novaSala, novaCapacidade, novoMatriculaAluno, novaMatriculaProfessor) {
        try {
          const turma = turmas.find((turma) => turma.getCod === cod);
          if (!turma) {
            return console.log("turma não encontrada!");
          }
          turma.nome = novoNome || turma.nome;
          turma.sala = novaSala || turma.sala;
          turma.capacidade = novaCapacidade || turma.capacidade;
          turma.matriculaAluno = novoMatriculaAluno  || turma.matriculaAluno;
          turma.matriculaProfessor = novaMatriculaProfessor || turma.matriculaProfessor;
        } catch (error) {
          console.error("Erro ao tentar atualizar a turma", error.message);
        }
      }
    deletarPorCod(cod) {
        try {
          const index = turmas.findIndex((turma) => turma.getCod === cod);
          if (index === -1) {
            return console.log("turma não encontrada");
          }
          turmas.splice(index, 1);
          console.log("turma excluida com sucesso!");
        } catch (error) {
          console.error("Erro ao tentar excluir a turma", error.message);
        }
      }
    deletarTodos() {
        try {
          turmas.length = 0;
          console.log("Todos as turmas excluidas!");
        } catch (error) {
          console.error("Erro ao tentar excluir todas as turmas", error.message);
        }
      }
    
    listaPorcod(cod) {
        try {
          const turma = turmas.find((turma) => turma.getCod === cod);
          if (!turma) {
            return console.log("turma não encontrada");
          }
          console.table(turma);
        } catch (error) {
          console.error("Erro ao tentar exibir a turma", error.message);
        }
      }
    listarTodos() {
        try {
          if (turmas.length === 0) {
            return console.log("Não existe turmas a serem exibidas!");
          }
          console.table(turmas);
        } catch (error) {
          console.error("Erro ao tentar exibir as turmas", error.message);
        }
      }
}