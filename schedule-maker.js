// let matéria = ['Biologia 1','Biologia 2', 'Biologia 3', 'Biologia 4', 'Matemática 1', 'Matemática 2','Matemática 3','Matemática 4','Matemática 5', 'Química 1', 'Química 2', 'Química 3', 'Química 4', 'Física 1', 'Física 2', 'Física 3', 'Física 4', 'Português', 'Redação', 'Inglês', 'Interpretação', 'Literatura', 'História Geral', 'História do Brasil', 'Geografia 1', 'Geografia 2', 'Filosofia', 'Sociologia']

const scheduleEl = document.getElementById("schedule-el")
const scheduleBtn = document.getElementById("schedule-btn")
const inputEl = document.getElementById("input-el")

let matéria = [ 
    
    {    nome: "Biologia 1",
        assuntos: ["Ecologia", "Proteínas", "Vitaminas"]
    } , 
    { 
        nome: "Biologia 2",
        assuntos: ["Botânica", "Fisiologia Vegetal","Histologia Vegetal"]
    } ,
    { 
        nome: "Biologia 3",
        assuntos: ["Biofísica","Fisiologia Humana","Histologia Humana"]
    } ,
    { 
        nome: "Biologia 4",
        assuntos: ["Genética","Eutrofização","Zoologia"]
    } ,
    { 
        nome: "Matemática 1",
        assuntos: ["Juros Simples","Juros Compostos","MDC e MMC"]
    } ,
    { 
        nome: "Matemática 2",
        assuntos: ["Geometria Plana","Geometria Espacial","Estatística"]
    } ,
    { 
        nome: "Matemática 3",
        assuntos: ["Probabilidade","Análise Combinatória","Conjuntos"]
    } ,
    { 
        nome: "Matemática 4",
        assuntos: ["Geometria analítica","Retas","Círculo"]
    } ,
    { 
        nome: "Matemática 5",
        assuntos: ["Trigonometria no triângulo retângulo","Trigonometria básica","mais trigonometria"]
    } ,
    { 
        nome: "História Geral",
        assuntos: ["Era das Revoluções","Guerras Mundiais","Antiguidade Clássica"]
    } ,
    { 
        nome: "História do Brasil",
        assuntos: ["Colonização","Período Regencial","República"]
    } ,
    { 
        nome: "Filosofia",
        assuntos: ["Antiguidade","Kant","Nieztche"]
    } ,
    { 
        nome: "Sociologia",
        assuntos: ["Sociologia clássica","Sociologia brasileira","Sociologia contemporânea"]
    } ,
    { 
        nome: "Interpretação",
        assuntos: ["Tipologia textual","Texto e suas características","Figuras de Linguagem"]
    } ,
    { 
        nome: "Literatura",
        assuntos: ["Romantismo","Modernismo","Realismo"]
    } ,
    { 
        nome: "Química 1",
        assuntos: ["Ácidos e bases","Sais e óxidos","Atomística"]
    } ,
    { 
        nome: "Química 2",
        assuntos: ["Funções orgânicas","Compostos orgânicos","Isomeria"]
    } ,
    { 
        nome: "Química 3",
        assuntos: ["Tabela periódica","Ligações químicas","Radioatividade"]
    } ,
    { 
        nome: "Química 4",
        assuntos: ["Propriedades coligativas","Solubilização","Equilíbrio químico"]
    } ,
    { 
        nome: "Física 1",
        assuntos: ["Movimentos uniformes","Estática","Dinâmica"]
    } ,
    { 
        nome: "Física 2",
        assuntos: ["Eletrostática","Eletrodinâmica","Eletromagnetismo"]
    } ,
    { 
        nome: "Física 3",
        assuntos: ["","",""]
    } ,
    { 
        nome: "Física 4",
        assuntos: ["","",""]
    } ,
    { 
        nome: "Inglês",
        assuntos: ["","",""]
    } ,
    { 
        nome: "Redação",
        assuntos: ["","",""]
    } ,
]



function gerarIndexRandomMateria(){
    let i = Math.floor(Math.random() * matéria.length)
    return i
}

function gerarIndexRandomAssunto(){
    let i = Math.floor(Math.random() * 3)
    return i
}

function gerar(){
    let index1 = gerarIndexRandomMateria()
    let index2 = gerarIndexRandomAssunto()
    let materia = matéria[index1].nome
    let assunto = matéria[index1].assuntos[index2]
    return `${materia}: ${assunto}`
}


scheduleBtn.addEventListener("click",function(){
    scheduleEl.innerHTML = ""
    
    for (let i = 0; i < inputEl.value; i++){
       let schedule = gerar()
        scheduleEl.innerHTML += `<li>${schedule}</li>`
    }
})