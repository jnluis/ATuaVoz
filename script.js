const teamMembers = [
    { name: "Carolina Vila Maior", position: "Vice-Presidente", imageUrl: 'vilamaior.jpg', sector: "Política Educativa", curso:"Licenciatura em Biotecnologia", linkedin:"https://www.linkedin.com/in/carolinavilamaior?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Pedro Rei", position: "Vogal", imageUrl: 'rei.jpg', sector: "Política Educativa", curso:"Licenciatura em Engenharia Informática", linkedin:"https://www.linkedin.com/in/pedro-rei-208a3226a/"},
    { name: "Bianca Ramos", position: "Vogal", imageUrl: 'bainca.jpg', sector: "Política Educativa" , curso:"Licenciatura em Contabilidade", linkedin:"https://www.linkedin.com/in/biancaramos20/"},
    { name: "Wilson do Carmo", position: "Presidente", imageUrl: 'wison.jpg', sector: "Presidência", curso:"Mestrado em Biomedicina Molecular", linkedin:"https://www.linkedin.com/in/wilson-carmo/" },
    { name: "Margarida Cordeiro", position: "Vice-Presidente", imageUrl: 'Margarida Cordeiro.jpg', sector: "Aveiro é Nosso", curso:"Mestrado em Línguas e Relações Empresariais", linkedin:"" },
    { name: "Francisco Silveira", position: "Vice-Presidente", imageUrl: 'franciscosilveir-1.jpg', sector: "Desporto e Bem Estar", curso:"Mestrado em Ciências do Mar e da Atmosfera", linkedin:"" },
    { name: "Joana Regadas", position: "Vice-Presidente Adjunta", imageUrl: 'regadas.jpg', sector: "Presidência", curso:"Mestrado em Engenharia Biomédica", linkedin:"https://www.linkedin.com/in/joanaregadas/" },
    { name: "Paulo Judite", position: "Tesoureiro", imageUrl: 'judite.jpg', sector: "Presidência", curso:"Mestrado em Economia" , linkedin:"https://www.linkedin.com/in/paulo-judite-722708270/"},
    { name: "Pedro Cruz", position: "Vice-Presidente", imageUrl: 'pedrocruz___-1.jpg', sector: "Comunicação e Imagem", curso:"Mestrado em Audiovisual e Novos Média" , linkedin:"https://www.linkedin.com/in/pedrolbpcruz/"},
    { name: "João Cruz", position: "Tesoureiro Adjunto", imageUrl: 'joaocruz.jpg', sector: "Presidência" , curso:"Mestrado Integrado em Engenharia Mecânica", linkedin:""},
    { name: "Gustavo Oliveira", position: "Secretário Geral", imageUrl: 'gustavo.jpg', sector: "Presidência", curso:"Mestrado em Assessoria de Direção e Comunicação nas Organizações", linkedin:"https://www.linkedin.com/in/gustavo-oliveira-7191921a3/" },
    { name: "Carolina Alberto", position: "Administradora", imageUrl: 'carolinaalberto.jpg', sector: "Presidência", curso:"Mestrado em Engenharia Biomédica", linkedin:"" },
    { name: "Andreia Novais", position: "Vogal", imageUrl: 'Andreia Novais.jpg', sector: "Aveiro é Nosso", curso:"Mestrado em Gestão da Investigação Clínica" , linkedin:"https://www.linkedin.com/in/andreia22novais"},
    { name: "Guilherme Freitas", position: "Vice-Presidente", imageUrl: 'Guilherme Freitas.jpg', sector: "Apoio aos Núcleos", curso:"Mestrado em Engenharia Química", linkedin:"" },
    { name: "Maria Ferreira", position: "Vogal", imageUrl: 'Maria Ferreira.jpg', sector: "Apoio aos Núcleos", curso:"Mestrado em Gestão e Planeamento em Turismo", linkedin:"www.linkedin.com/in/mariaferreira28" },
    { name: "Lénia Ferreira", position: "Vogal", imageUrl: 'lenia.jpg', sector: "Apoio aos Núcleos", curso:"Mestrado em Ensino de Matemátia 3ºCEB e Secundário", linkedin:"" },
    { name: "Joana Ferreira", position: "Vogal", imageUrl: 'Joana Ferreira.jpg', sector: "Aveiro é Nosso", curso:"Licenciatura em Educação Básica", linkedin:"" },
    { name: "Joana Aleixo", position: "Vogal", imageUrl: 'joanaaleixo-1.jpg', sector: "Comunicação e Imagem", curso:"Licenciatura em Administração Pública", linkedin:"https://www.linkedin.com/in/joanaaleixo-/" },
    { name: "Matilde Ferreira", position: "Vogal", imageUrl: 'matildepreto-1.jpg', sector: "Comunicação e Imagem", curso:"Licenciatura em Multimédia e Tecnologias da Comunicação", linkedin:"" },
    { name: "Lucas Matos", position: "Vice-Presidente", imageUrl: 'lucasmatos.jpg', sector: "Administração Interna" , curso:"Mestrado Integrado em Engenharia de Computadores e Telemática" , linkedin:""},
    { name: "Hugo Oliveira", position: "Vogal", imageUrl: 'hugooliveira.jpg', sector: "Administração Interna", curso:"Mestrado em Engenharia Mecânica" , linkedin:"https://www.linkedin.com/in/hugo-oliveira-276aba175?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"},
    { name: "Juan Carpintero", position: "Vogal", imageUrl: 'juan.jpg', sector: "Administração Interna", curso:"Licenciatura em Engenharia de Computadores e Informática", linkedin:"" },
    { name: "Pedro Rocha", position: "Vice-Presidente", imageUrl: 'pedrorocha-1.jpg', sector: "Cultura" , curso:"Mestrado em Engenharia de Computadores e Telemática", linkedin:""},
    { name: "Maria Ferreira", position: "Vogal", imageUrl: 'mariaferreira-1.jpg', sector: "Cultura", curso:"Licenciatura em Gestão" , linkedin:""},
    { name: "Leonardo Salazar", position: "Vogal", imageUrl: 'leo-1.jpg', sector: "Cultura", curso:"Licenciatura em Fisioterapia", linkedin:"" },
    { name: "Luzia Ferreira", position: "Vogal", imageUrl: 'luzia.jpg', sector: "Desporto e Bem Estar", curso:"Licenciatura em Engenharia e Gestão Industrial", linkedin:"https://www.linkedin.com/in/luzia-ferreira-431383a3/" },
    { name: "Pedro Palavra", position: "Vogal", imageUrl: 'pedropalavra.jpg', sector: "Administração Interna", curso:"Licenciatura em Design", linkedin:"" },
    { name: "Gonçalo Marques", position: "Presidente", imageUrl: 'Goncalo.jpg', sector: "Mesa da Assembleia Geral", curso:"Mestrado em Engenharia Química- Processos Quimicos", linkedin:"" },
    { name: "Nânci Marques", position: "Vice-Presidente", imageUrl: 'magnanci.jpg', sector: "Mesa da Assembleia Geral", curso:"Mestrado em Engenharia Geológica Geoambiental" , linkedin:"https://www.linkedin.com/in/n%C3%A2nci-jesus/"},
    { name: "Matilde Pinho", position: "Vogal", imageUrl: 'matildepinho-1.jpg', sector: "Comunicação e Imagem", curso:"Licenciatura em Engenharia de Materiais " , linkedin:""},
    { name: "Fábio Yu Chen", position: "Presidente", imageUrl: 'fabyo.jpg', sector: "Conselho Fiscal e de Jurisdição", curso:"Mestrado em Ecotoxicologia e Análise de Risco", linkedin:"" },
    { name: "Inês Filipe", position: "1.º Secretaria", imageUrl: 'inesfilipa.jpg', sector: "Mesa da Assembleia Geral", curso:"Licenciatura em Matemática ", linkedin:"" },
    { name: "Miguel Martins", position: "Vice-Presidente", imageUrl: 'migueçmartins.jpg', sector: "Conselho Fiscal e de Jurisdição", curso:"Mestrado em Engenharia Informática", linkedin:"" },
    { name: "Joaquim Esteves", position: "2.º Secretário", imageUrl: 'joaquim.jpg', sector: "Mesa da Assembleia Geral" , curso:"Licenciatura em Fisioterapia ", linkedin:""},
    { name: "José Pontes", position: "3.º Secretário", imageUrl: 'pontes.jpg', sector: "Mesa da Assembleia Geral", curso:"Mestrado Integrado em Engenharia Civil" , linkedin:""},
    { name: "Bruna Costa", position: "1.º Secretaria", imageUrl: 'bruna.jpg', sector: "Conselho Fiscal e de Jurisdição", curso: "Mestrado em Marketing (PL)", linkedin:"https://www.linkedin.com/in/bruna-costa-a61a37201/" },
    { name: "Joana Pinho", position: "2° Secretária", imageUrl: 'joana.jpg', sector: "Conselho Fiscal e de Jurisdição" , curso:"Licenciatura em Engenharia do Ambiente", linkedin:""},
    { name: "Tomás Oliveira", position: "Vogal", imageUrl: 'tomas.jpg', sector: "Desporto e Bem Estar", curso:"Mestrado em Engenharia Química", linkedin:"" },
    { name: "Eduardo Pires", position: "Relator", imageUrl: 'pires.jpg', sector: "Conselho Fiscal e de Jurisdição", curso:"Licenciatura em Design de Produto e Tecnologia", linkedin:"" },



    
    // ... more members
];

function filterSelection(sector) {
    const container = document.getElementById('team-container');
    container.innerHTML = '';

    if (sector === 'all') {
        const sectors = ["Presidência", "Política Educativa", "Cultura", "Desporto e Bem Estar", "Administração Interna", "Aveiro é Nosso", "Apoio aos Núcleos", "Comunicação e Imagem",   "Conselho Fiscal e de Jurisdição","Mesa da Assembleia Geral"];
        sectors.forEach(sec => {
            container.innerHTML += `<h2 class="text-center my-4">${sec}</h2>`;
            teamMembers.forEach(member => {
                if (member.sector === sec) {
                    const cardHtml = `
                    <div class="col-sm-6 col-md-4 mb-4 d-inline">
        <div class="row d-flex justify-content-center">
            <div class="card w-75">
                <img src="static/team/${member.imageUrl}" class="card-img-top" alt="${member.name}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title"><strong>${member.name}</strong></h5>
                        ${member.linkedin ? `<a href="${member.linkedin}" target="_blank" class="linkedin-icon"><i class="fab fa-linkedin"></i></a>` : ''}
                    </div>
                    <p class="card-text">${member.position}</p>
                    <p class="card-text">${member.curso}</p>
                </div>
            </div>
        </div>                  
    </div>                

                    `;
                    container.innerHTML += cardHtml;
                }
            });
        });
    } else {
        container.innerHTML += `<h2 class="text-center my-4">${sector}</h2>`;
        teamMembers.forEach(member => {
            if (member.sector === sector) {
                const cardHtml = `
                <div class="col-sm-6 col-md-4 mb-4 d-inline">
                <div class="row d-flex justify-content-center">
                    <div class="card w-75">
                        <img src="static/team/${member.imageUrl}" class="card-img-top" alt="${member.name}">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="card-title"><strong>${member.name}</strong></h5>
                                ${member.linkedin ? `<a href="${member.linkedin}" target="_blank" class="linkedin-icon"><i class="fab fa-linkedin"></i></a>` : ''}
                            </div>
                            <p class="card-text">${member.position}</p>
                            <p class="card-text">${member.curso}</p>
                        </div>
                    </div>
                </div>                  
            </div>   
                `;
                container.innerHTML += cardHtml;
            }
        });
    }
}

// Initially show all members grouped by sector
filterSelection('all');