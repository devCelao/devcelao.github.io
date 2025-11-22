let experienciaProfissional = [
    {
        cargo: 'Estagiário de QA',
        periodo: 'fev de 2020 - out 2020',
        responsabilidades: [`Controle no fluxo de entregas ao cliente final`,
                            `Atendimento as equipes de desenvolvimento para instruções referentes as regras para distribuição`,
                            `Atualização de ambientes (testes / homolog) e instalação de API's, Web Services e Web sites em ambientes Windows usando IIS`
                        ]
    },
    {
        cargo: `Técnico DevOps`,
        periodo: `out de 2020 - jan de 2022`,
        responsabilidades: [`Criação de pipelines em ambientes Azure`,
                            `Atualização de ambientes (testes / homolog) e instalação de API's, Web Services e Web sites em ambientes Windows usando IIS`
                            ]
    },
    {
        cargo: `Full Stack Developer`,
        periodo: `fev de 2022 - atualmente`,
        responsabilidades: [`Manutenção e criação de novas funcionalidades em sistemas legado da empresa ( WinForms, .Net Framework, ASP Clássico)`,
                            `Criação de novos componentes (API's, Web Services, Windows Services) em .NetCore`,
                            `Manutenção de rotinas (Procedures, Packages, Functions, etc) em ambiente Oracle Pl/SQL`,
                            `Code Reviewer do Squad`,
                            `Git leader do Squad`
                            ]
    }
]

function AlteraConteudoModal(index){
    var modalTitle = document.getElementById('exampleModalLabel');
    var modalBody = document.querySelector('.modal-body');

    if(index == 1){
        modalTitle.textContent = 'Testando'
    }
    else{
        modalTitle.textContent = 'Leps Gay'
    }
}
