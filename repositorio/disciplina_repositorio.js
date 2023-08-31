class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(codigo) {
        const index = this._disciplinas.indexOf(disciplina => disciplina.codigo === codigo);
        this._disciplinas.splice(index, 1);
    }

    listar() {
        return this._disciplinas;
    }

    pesquisarPorCodigo(codigo) {
        return this._disciplinas.filter(disciplina => disciplina.codigo === codigo);
    }

    inserirAlunoNaDisciplina(codigo, aluno) {
        const disciplina = this.pesquisarPorCodigo(codigo);
        if (disciplina) {
            disciplina.alunos.push(aluno);
        }
    }
}
