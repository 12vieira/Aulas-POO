

export class Pessoa {
    #matricula
    constructor(matricula, nome, email, telefone, senha){
        this.#matricula = matricula;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._senha = senha;
    }
    // modificadores de acesso
    get getMatricula(){
        return this.#matricula;
    }
}