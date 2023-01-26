let matéria = ['Biologia 1','Biologia 2', 'Biologia 3', 'Biologia 4', 'Matemática 1', 'Matemática 2','Matemática 3','Matemática 4','Matemática 5', 'Química 1', 'Química 2', 'Química 3', 'Química 4', 'Física 1', 'Física 2', 'Física 3', 'Física 4', 'Português', 'Redação', 'Inglês', 'Interpretação', 'Literatura', 'História Geral', 'História do Brasil', 'Geografia 1', 'Geografia 2', 'Filosofia', 'Sociologia']

function generateRandomIndex(){
    let i = Math.floor(Math.random() * matéria.length)
    return matéria[i]
}

let scheduleEl = document.querySelector('p#schedule-el')
scheduleEl.textContent = ""
scheduleEl.style.display = "none";
let quantidadeMateria = ""

function generateSchedule(){
    let materia1 = generateRandomIndex()
    let materia2 = generateRandomIndex()
    let materia3 = generateRandomIndex()

    if ( materia1 != materia2 && materia1 != materia3 && materia2 != materia3){
        scheduleEl.style.display = "block";
        scheduleEl.textContent = `Hoje você estudará ${materia1}, ${materia2} e ${materia3}`
        
       /*  if (materia1 === "Biologia" || materia2 === "Biologia" || materia3 === "Biologia"){
            let assuntos = ["Ecologia", "Zoologia", "Fisiologia Humana", "Botânica"]
            let i = Math.floor(Math.random() * assuntos.length)
            
        }
        if (materia1 === "Física" || materia2 === "Física" || materia3 === "Física"){
            let assuntos = ["Elétrica", "Mecânica", "Ondulatória", "Ótica", "Cinemática", "Dinâmica"]
            let i = Math.floor(Math.random() * assuntos.length)
            console.log(assuntos[i])
        }
        if (materia1 === "Química" || materia2 === "Química" || materia3 === "Química"){
            let assuntos = ["Química Verde", "Química Geral", "Orgânica", "Química dos Alimentos"]
            let i = Math.floor(Math.random() * assuntos.length)
            console.log(assuntos[i])
        }
        if (materia1 === "Geografia" || materia2 === "Geografia" || materia3 === "Geografia"){
            let assuntos = ["Geografia física", "Agricultura", "Geopolítica"]
            let i = Math.floor(Math.random() * assuntos.length)
            console.log(assuntos[i])
        }
        if (materia1 === "História" || materia2 === "História" || materia3 === "História"){
            let assuntos = ["Antiguidade", "Modernidade", "Guerras Mundiais", "Idade Média"]
            let i = Math.floor(Math.random() * assuntos.length)
            console.log(assuntos[i])
        }
        if (materia1 === "Sociologia" || materia2 === "Sociologia" || materia3 === "Sociologia"){
            let assuntos = ["Karl Marx", "Positivismo e Durkheim", "Escola de Frankfurt", "Sociologia contemporânea"]
            let i = Math.floor(Math.random() * assuntos.length)
            console.log(assuntos[i])
            
        }
        if (materia1 === "Matemática" || materia2 === "Matemática" || materia3 === "Matemática"){
            let assuntos = ["Geometria plana", "Estatística", "Álgebra", "Matemática Básica"]
            let i = Math.floor(Math.random() * assuntos.length)
            console.log(assuntos[i]) } */
    } else {
        scheduleEl.textContent = "Erro, tente novamente!"
        assuntosEl.textContent = ""
    }

}




