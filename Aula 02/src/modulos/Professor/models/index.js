import { Pessoa } from "./Pessoa";

export class ProfessorModel extends Pessoa {
    constructor(matricula, turma, disciplina, senha) {
        this.#matricula = matricula
        this._turma = turma;
        this._disciplina = disciplina;
        super(senha);
    }
    // modificadores de acesso
    get getMatricula(){
        return this.#matricula
    }
}