class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) { 
        const disciplina = new Disciplina(codigo, nome) 
        if (this.repositorio.pesquisarPorCodigo(codigo) != codigo)
            return this.repositorio.inserir(disciplina);

        return undefined;
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.pesquisarPorCodigo(codigo);
    }

    inserirAlunoNaDisciplina(codigo, aluno) {
        const disciplina = this.repositorio.pesquisarPorCodigo(codigo);

        if (disciplina) 
            disciplina.alunos.push(aluno);
        else 
            throw new Error("Disciplina não encontrada");
    }
}

