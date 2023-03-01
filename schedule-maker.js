// let matéria = ['Biologia 1','Biologia 2', 'Biologia 3', 'Biologia 4', 'Matemática 1', 'Matemática 2','Matemática 3','Matemática 4','Matemática 5', 'Química 1', 'Química 2', 'Química 3', 'Química 4', 'Física 1', 'Física 2', 'Física 3', 'Física 4', 'Português', 'Redação', 'Inglês', 'Interpretação', 'Literatura', 'História Geral', 'História do Brasil', 'Geografia 1', 'Geografia 2', 'Filosofia', 'Sociologia']

const scheduleEl = document.getElementById("schedule-el")
const scheduleBtn = document.getElementById("schedule-btn")

let matéria = [ 
    
    {    nome: "Biologia 1",
        assuntos: ["Ecologia"]
    } , 
    { 
        nome: "Biologia 2",
        assuntos: ["Botânica"]
    } ,
    { 
        nome: "Biologia 3",
        assuntos: ["Biofísica "]
    } ,
    { 
        nome: "Biologia 4",
        assuntos: ["Genética"]
    } ,
    { 
        nome: "Matemática 1",
        assuntos: ["Juros Simples"]
    } ,
    { 
        nome: "Matemática 2",
        assuntos: ["Geometria Plana"]
    } ,
    { 
        nome: "Matemática 3",
        assuntos: ["Probabilidade"]
    } ,
    { 
        nome: "Matemática 4",
        assuntos: ["Geometria analítica"]
    } ,
]


let j = Math.floor(Math.random() * 6)

function gerarIndexRandom(){
    let i = Math.floor(Math.random() * matéria.length)
    return i
}

function gerar(){
    gerarIndexRandom()
    console.log(`${matéria[i].nome} : ${matéria[i].assuntos}`)

}





scheduleBtn.addEventListener("click",function(){
    gerar()
})



/* function generateRandomIndex(){
    let i = Math.floor(Math.random() * matéria.length)
    return i
} */



/* function generateSchedule(){
    let materia1 = generateRandomIndex()
    let materia2 = generateRandomIndex()
    let materia3 = generateRandomIndex()
    
    if ( materia1 != materia2 && materia1 != materia3 && materia2 != materia3){
        scheduleEl.style.display = "block";
        scheduleEl.textContent = `Hoje você estudará ${materia1}, ${materia2} e ${materia3}`
        
       
    } else {
        scheduleEl.textContent = "Erro, tente novamente!"
        assuntosEl.textContent = ""
    }

} */