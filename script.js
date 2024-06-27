ixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
   {
       enunciado: "Você está em um bosque mágico, cercado por árvores altas e folhas brilhantes. À sua frente, há duas trilhas:",
       alternativas: [
           {
               texto: "Trilha da Conservação: Siga esta trilha para aprender sobre a importância da preservação.",
               afirmacao: "Ficou muio feliz com a descoberta. "
           },
           {
               texto: "Siga esta trilha para investigar um vazamento de poluentes no rio próximo",
               afirmacao: "No início ficou com medo do que poderia encontrar mais se surprendeu."
           }
       ]
   },
   {
       enunciado: "Você chegou a um lago cristalino. Duas opções se apresentam:",
       alternativas: [
           {
               texto: "Nadar e Limpar: Mergulhe no lago e recolha o lixo flutuante.",
               afirmacao: "Fiquei muito fliz com o resultado."
           },
           {
               texto: "Observar e Documentar: Fique na margem e anote os animais e plantas que vivem ali..",
               afirmacao: "Observei vrias espécies de animais."
           }
       ]
   },
   {
       enunciado: "Você entra em uma floresta densa. À sua esquerda, há uma árvore gigante prestes a cair:",
       alternativas: [
           {
               texto: "Alertar as Autoridades: Ligue para os guardas florestais e informe sobre a árvore..",
               afirmacao: "Os guardas cuidarão da arvore."
           },
           {
               texto: "Tentar Empurrar a Árvore: Tente salvar a árvore sozinho.",
               afirmacao: "Foi por pouco, quase fui esmagado."
           }
       ]
   },
   {
       enunciado: "Você chega a uma cidade futurista. Duas opções se destacam:",
       alternativas: [
           {
               texto: "Usar Transporte Público: Pegue o metrô para reduzir a emissão de carbono.",
               afirmacao: "Adori andar de metrõ."
           },
           {
               texto: "Comprar Produtos Locais: Visite o mercado de agricultores para apoiar os produtores locais.",
               afirmacao: "Gostei muito o mercado varios produtos de produores locais"
           }
       ]
   },
   {
       enunciado: "Você está no topo de uma montanha. À sua frente, há uma placa:",
       alternativas: [
           {
               texto: "Plantar uma Árvore: Pegue uma semente e plante-a na terra",
               afirmacao: "Plantei algumas árvores para a proxima geração"
           },
           {
               texto: "Descer sem Deixar Rastros: Volte para casa sem perturbar o ambiente.",
               afirmacao: "cheguei em casa muito feliz com meu passeio pela a natureza"
           }
       ]
   },
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}


function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}


function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}


function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}


mostraPergunta();
