export class TurmaModel {
    #cod
    constructor(cod, nome, sala, capacidade, matriculaAluno, matriculaProfessor) {
        this.#cod = cod
        this.nome = nome
        this.sala = sala
        this.capacidade = capacidade
        this.matriculaAluno = matriculaAluno;
        this.matriculaProfessor = matriculaProfessor;
    }
    get getCod(){
        return this.#cod
    }

}