import { Pessoa } from "../../Professor/models/Pessoa.js"

export class AlunoModel extends Pessoa {
    constructor(matricula, nome, email, telefone, senha) {
        super(matricula,nome, email, telefone, senha);
    }
}