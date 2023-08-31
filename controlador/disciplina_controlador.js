class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const codigoElemento = Number(document.querySelector("#codigo").value);
        const nomeElemento = document.querySelector("#nome").value;
        const disciplina = this.disciplinaServico.inserir(codigoElemento, nomeElemento);

        if (disciplina) {
            this.inserirDisciplinaNoHTML(codigoElemento, nomeElemento);
            alert('Disciplina inserida!');
        } else 
            throw new Error('Disciplina não cadastrada!');
    }

    inserirDisciplinaNoHTML(codigo, nome) {
        const elemento = document.createElement("li");
        elemento.textContent = `${codigo} - ${nome}`;
        document.body.appendChild(elemento);
    }

    inserirAlunoNaDisciplina(disciplina, aluno) {
        const alunos = disciplina.alunos;
        
        if (!alunos.includes(aluno)) 
            alunos.push(aluno);
        else 
            console.log("Aluno já está matriculado na disciplina");
    }  
}