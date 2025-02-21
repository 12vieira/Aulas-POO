import { turmas } from "../../../config/database.js";
import { TurmaModel } from "../models/index.js";

export class TurmaController {
    criar(cod, nome, sala, capacidade){
        try {
            const novaTurma = new TurmaModel(cod, nome, sala, capacidade);
            turmas.push(novaTurma);
            console.table(novaTurma);
        } catch (error) {
            console.error("Erro ao tentar criar turma", error.message);
        }
    }
    editar(cod, novoNome, novaSala, novaCapacidade) {
        try {
          const turma = turmas.find((turma) => turma.getcod === cod);
          if (!turma) {
            return console.log("turma não encontrada!");
          }
          turma.nome = novoNome || turma.nome;
          turma.email = novaSala || turma.sala;
          turma.senha = novaCapacidade || turma.capacidade;
        } catch (error) {
          console.error("Erro ao tentar atualizar o turma", error.message);
        }
      }
    deletarPorCod(cod) {
        try {
          const index = turmas.findIndex((turma) => turma.getcod === cod);
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
          const turma = turmas.find((turma) => turma.getcod === cod);
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