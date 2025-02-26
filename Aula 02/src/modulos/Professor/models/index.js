import { Pessoa } from "./Pessoa.js";

export class ProfessorModel extends Pessoa {
    constructor(turma, disciplina, matricula, nome, email, telefone, senha) {
        super(matricula,nome, email, telefone,senha);
        this.turma = turma;
        this.disciplina = disciplina;
    }
}