const activities = [
    // Criativa
{ title: "Autorretrato com estilo", description: "Desenhe um autorretrato trazendo sua identidade única", category: "criativa", effort: "baixo", company: "sozinho" },
{ title: "Poema do dia", description: "Escreva um poema baseado nas pequenas coisas que marcaram seu dia", category: "criativa", effort: "baixo", company: "sozinho" },
{ title: "Explosão de ideias", description: "Faça um brainstorm com ideias ousadas para novos projetos", category: "criativa", effort: "médio", company: "sozinho ou em grupo" },
{ title: "Colagem criativa", description: "Use revistas e materiais para criar uma colagem com significados", category: "criativa", effort: "baixo", company: "sozinho" },
{ title: "Pintura conceitual", description: "Crie uma paisagem com elementos conceituais e abstratos", category: "criativa", effort: "médio", company: "sozinho" },
{ title: "Playlist de impacto", description: "Monte uma playlist com músicas que inspiram diferentes moods", category: "criativa", effort: "baixo", company: "sozinho ou em grupo" },
{ title: "Super-pet ilustrado", description: "Desenhe seu pet como um personagem heroico ou caricato", category: "criativa", effort: "baixo", company: "sozinho" },
{ title: "Escultura fora do comum", description: "Modele algo único com barro ou argila, sem seguir regras", category: "criativa", effort: "alto", company: "sozinho ou em grupo" },
{ title: "Mini-série de 5 cenas", description: "Escreva uma mini-série de cinco cenas com diálogos envolventes", category: "criativa", effort: "alto", company: "sozinho" },
{ title: "Curta experimental", description: "Grave um curta com uma estética experimental e poucos cortes", category: "criativa", effort: "alto", company: "em grupo" },
{ title: "Arte colaborativa", description: "Junte amigos para pintar uma tela com técnicas variadas", category: "criativa", effort: "médio", company: "em grupo" },
{ title: "Painel de ideias", description: "Crie um painel de ideias visuais e inovadoras com seus amigos", category: "criativa", effort: "alto", company: "em grupo" },
{ title: "Escreva uma carta para o futuro", description: "Escreva uma mensagem para você mesmo ler no futuro", category: "criativa", effort: "médio", company: "sozinho" },
{ title: "Desenhe seu ambiente favorito", description: "Ilustre o local onde você mais se sente em paz", category: "criativa", effort: "médio", company: "sozinho" },
{ title: "Redesenhe uma capa de álbum", description: "Escolha um álbum que você gosta e redesenhe a capa com seu estilo", category: "criativa", effort: "médio", company: "sozinho" },

// Relaxante
{ title: "Meditação guiada", description: "Medite com guias sonoros e relaxe profundamente", category: "relaxante", effort: "baixo", company: "sozinho" },
{ title: "Som ambiente", description: "Ouça sons de natureza enquanto relaxa ou faz atividades leves", category: "relaxante", effort: "baixo", company: "sozinho" },
{ title: "Caminhada no parque", description: "Faça uma caminhada leve e aprecie os detalhes da natureza ao redor", category: "relaxante", effort: "médio", company: "sozinho ou em grupo" },
{ title: "Sessão de filmes tranquilos", description: "Escolha um ou dois filmes calmos e tenha uma sessão relaxante", category: "relaxante", effort: "baixo", company: "sozinho ou em grupo" },
{ title: "Banho relaxante", description: "Tome um banho quente e relaxe com aromas e sons suaves", category: "relaxante", effort: "baixo", company: "sozinho" },
{ title: "Leitura leve", description: "Leia um livro que traz tranquilidade, seja ficção ou algo reflexivo", category: "relaxante", effort: "médio", company: "sozinho" },
{ title: "Ouça um podcast calmo", description: "Escolha um podcast relaxante para ouvir durante uma atividade simples", category: "relaxante", effort: "baixo", company: "sozinho" },
{ title: "Caminhada descalço", description: "Caminhe descalço em algum local seguro, sentindo a terra ou grama", category: "relaxante", effort: "baixo", company: "sozinho" },
{ title: "Desenho com mandalas", description: "Desenhe mandalas detalhadas e coloridas para aliviar o estresse", category: "relaxante", effort: "baixo", company: "sozinho" },
{ title: "Alongamento para relaxar", description: "Faça uma sessão de alongamento simples para descontrair o corpo", category: "relaxante", effort: "baixo", company: "sozinho" },

// Divertido
{ title: "Jogue um clássico", description: "Revisite aquele jogo retrô que traz nostalgia e diversão garantida", category: "divertido", effort: "médio", company: "sozinho ou em grupo" },
{ title: "Solte a voz no chuveiro", description: "Cante sua música favorita no chuveiro, sem medo de errar", category: "divertido", effort: "baixo", company: "sozinho" },
{ title: "Noite de karaokê", description: "Organize uma noite de karaokê e divirta-se cantando com os amigos", category: "divertido", effort: "alto", company: "em grupo" },
{ title: "Desafio multiplayer", description: "Escolha um jogo multiplayer e desafie um amigo para competir", category: "divertido", effort: "médio", company: "sozinho ou em grupo" },
{ title: "Sessão de dança livre", description: "Dance sem regras, seja na sala de casa ou em uma festa", category: "divertido", effort: "alto", company: "sozinho ou em grupo" },
{ title: "Sessão de improviso", description: "Improvise uma atuação ou uma história sem roteiro, sozinho ou com amigos", category: "divertido", effort: "médio", company: "sozinho ou em grupo" },
{ title: "Gincana de desafios", description: "Crie uma gincana de desafios simples e divirta-se com amigos", category: "divertido", effort: "alto", company: "em grupo" },
{ title: "Jogo de perguntas", description: "Organize um jogo de perguntas rápidas e divertidas", category: "divertido", effort: "médio", company: "em grupo" },
{ title: "Noite de board games", description: "Jogue algum jogo de tabuleiro com os amigos", category: "divertido", effort: "médio", company: "em grupo" },
{ title: "Sessão de memes", description: "Compartilhe e crie memes engraçados com os amigos", category: "divertido", effort: "baixo", company: "sozinho ou em grupo" },
{ title: "Maratona de memes", description: "Passe um tempo navegando em memes e compartilhando os melhores", category: "divertido", effort: "baixo", company: "sozinho" },
{ title: "Assista vídeos de pegadinhas", description: "Relaxe assistindo pegadinhas e vídeos engraçados", category: "divertido", effort: "baixo", company: "sozinho" },
{ title: "Jogue um game casual no celular", description: "Escolha um jogo casual no celular e divirta-se por alguns minutos", category: "divertido", effort: "baixo", company: "sozinho" },
{ title: "Assista a uma série leve", description: "Escolha uma série divertida e descontraída para maratonar", category: "divertido", effort: "baixo", company: "sozinho" },
{ title: "Desenho livre", description: "Pegue um caderno e desenhe o que vier à mente, sem compromisso", category: "divertido", effort: "baixo", company: "sozinho" },
{ title: "Ouça um podcast engraçado", description: "Escolha um podcast leve e engraçado para relaxar enquanto escuta", category: "divertido", effort: "baixo", company: "sozinho" },
{ title: "Faça uma playlist de nostalgia", description: "Crie uma playlist com músicas que te fazem relembrar bons momentos", category: "divertido", effort: "baixo", company: "sozinho" },
{ title: "Explore receitas fáceis", description: "Procure receitas rápidas e simples para experimentar sozinho", category: "divertido", effort: "baixo", company: "sozinho" },
{ title: "Customize seu celular", description: "Mude o wallpaper, ícones e personalize seu celular de maneira divertida", category: "divertido", effort: "baixo", company: "sozinho" },
{ title: "Assista a um stand-up", description: "Relaxe assistindo a um show de stand-up e dê boas risadas", category: "divertido", effort: "baixo", company: "sozinho" },

// Educacional
{ title: "TED inspirador", description: "Assista a uma palestra TED sobre um tema que você quer explorar", category: "educacional", effort: "baixo", company: "sozinho" },
{ title: "Artigo técnico", description: "Leia um artigo interessante de uma área técnica que você gosta", category: "educacional", effort: "médio", company: "sozinho" },
{ title: "Curso online intensivo", description: "Participe de um curso online intensivo e aprenda algo novo", category: "educacional", effort: "alto", company: "sozinho" },
{ title: "Discussão filosófica", description: "Converse sobre temas filosóficos profundos com os amigos", category: "educacional", effort: "médio", company: "em grupo" },
{ title: "Desafios de lógica", description: "Resolva exercícios de lógica para estimular seu raciocínio", category: "educacional", effort: "alto", company: "sozinho" },
{ title: "Faça um curso rápido", description: "Escolha um curso breve sobre um tema novo e interessante", category: "educacional", effort: "médio", company: "sozinho" },
{ title: "Sessão de documentários", description: "Maratone documentários sobre temas diversos e fascinantes", category: "educacional", effort: "baixo", company: "sozinho ou em grupo" },

  // Educacional (continuação)
  { title: "Workshop online", description: "Participe de um workshop online e aprenda algo prático", category: "educacional", effort: "médio", company: "sozinho ou em grupo" },
{ title: "Debate temático", description: "Organize um debate com amigos sobre um tema relevante e atual", category: "educacional", effort: "alto", company: "em grupo" },
{ title: "Leitura acadêmica", description: "Escolha um livro técnico ou acadêmico para ler e aprender", category: "educacional", effort: "médio", company: "sozinho" },
{ title: "Resenha crítica", description: "Escreva uma resenha crítica de um livro ou artigo que você leu recentemente", category: "educacional", effort: "médio", company: "sozinho" },
{ title: "Estudo de caso", description: "Analise um estudo de caso interessante de sua área de interesse", category: "educacional", effort: "alto", company: "sozinho" },
{ title: "Hackathon caseiro", description: "Junte-se com amigos para criar soluções em um hackathon improvisado", category: "educacional", effort: "alto", company: "em grupo" },

// Produtiva
{ title: "Organização digital", description: "Organize suas pastas e arquivos digitais para deixar tudo em ordem", category: "produtiva", effort: "baixo", company: "sozinho" },
{ title: "Planejamento semanal", description: "Defina suas metas e tarefas para a semana e organize seu tempo", category: "produtiva", effort: "médio", company: "sozinho" },
{ title: "Revise seu orçamento", description: "Revise seu orçamento mensal e ajuste suas finanças", category: "produtiva", effort: "alto", company: "sozinho" },
{ title: "Tarefa de 15 minutos", description: "Escolha uma tarefa simples e rápida e resolva em 15 minutos", category: "produtiva", effort: "baixo", company: "sozinho" },
{ title: "Organização minimalista", description: "Revise seus itens e adote um estilo de organização mais minimalista", category: "produtiva", effort: "médio", company: "sozinho" },
{ title: "Revisão de metas", description: "Revise suas metas de curto e longo prazo e veja o progresso", category: "produtiva", effort: "alto", company: "sozinho" },
{ title: "Organize seu espaço criativo", description: "Dê uma organizada no seu espaço criativo, deixando tudo acessível", category: "produtiva", effort: "baixo", company: "sozinho" },
{ title: "Backup de dados", description: "Faça o backup de todos os seus arquivos importantes", category: "produtiva", effort: "baixo", company: "sozinho" },
{ title: "Sessão de planejamento", description: "Planeje seus próximos passos em projetos pessoais ou profissionais", category: "produtiva", effort: "médio", company: "sozinho" },
{ title: "Organize suas finanças", description: "Crie ou atualize seu plano financeiro para os próximos meses", category: "produtiva", effort: "alto", company: "sozinho" }
];
// Variável para armazenar os filtros anteriores
let lastFilters = { effort: null, company: null, category: null };

// Função executada ao clicar no botão "Acabe com o meu tédio!"
document.getElementById("new-activity-btn").addEventListener("click", function() {
    const effort = document.getElementById("effort").value;
    const company = document.getElementById("company").value;
    const category = document.getElementById("category").value;

    // Filtrar as atividades com base nos filtros selecionados
    const filteredActivities = activities.filter(activity =>
        activity.effort === effort && activity.company.includes(company) && activity.category === category
    );

    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Limpar resultados anteriores

    // Verificar se há atividades filtradas
    if (filteredActivities.length === 0) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = "<h3>Encontre o que fazer!</h3><p>Não encontramos atividades com esses filtros.</p>";
        resultsContainer.appendChild(card);
    } else {
        // Selecionar uma atividade aleatória dos resultados filtrados
        const randomActivity = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];

        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h3");
        title.textContent = randomActivity.title;

        const description = document.createElement("p");
        description.textContent = randomActivity.description;

        const details = document.createElement("div");
        details.classList.add("details");
        details.innerHTML = `<strong>Grau de esforço:</strong> ${randomActivity.effort}<br><strong>Companhia:</strong> ${randomActivity.company}`;

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(details);
        resultsContainer.appendChild(card);
    }

    // Esconder a descrição inicial
    const descriptionCard = document.getElementById("description-card");
    if (descriptionCard) {
        descriptionCard.style.display = "none";
    }

    // Alterar o texto do botão com base nos filtros anteriores
    const button = document.getElementById("new-activity-btn");

    if (lastFilters.effort === effort && lastFilters.company === company && lastFilters.category === category) {
        button.textContent = "Não gostei. De novo!";
    } else {
        button.textContent = "Acabe com o meu tédio!";
        lastFilters = { effort, company, category };
    }
});

// Função para mudar o gradiente com base no movimento do mouse
const gradient = document.getElementById('gradient');
document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    gradient.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, 
    rgba(255, 255, 255, 0.1), #121212 50%)`;
});