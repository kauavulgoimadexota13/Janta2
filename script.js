const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual será a entrada? ",
        alternativas: [
            {
                texto: "Batata frita",
                afirmacao: "afirmação"
            },
            {
                texto: "Frango frito" ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "Qual será o seu lanche?",
        alternativas: [
            {
                texto: "X-salada",
                afirmacao: "afirmação"
            },
            {
                texto: "X-tudo",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual será a bebida?",
        alternativas: [
            {
                texto: "Suco",
                afirmacao: "afirmação"
            },
            {
                texto: "Refrigerante",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "Escolha a sua sobremesa?",
        alternativas: [
            {
                texto: "Sorvete",
                afirmacao: "afirmação"
            },
            {
                texto: "Milk-shake",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "Escolha sua forma de transporte?",
        alternativas: [
            {
                texto: "Carro",
                afirmacao: "afirmação"
            },
            {
                texto:"Moto",
                afirmacao: "afirmação"
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal +=afirmacoes + " ";
    atual++; 
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você terá um ótimo jantar!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();
