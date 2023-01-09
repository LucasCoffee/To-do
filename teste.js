let nomeT = 0
let descricaot = 0 
let f = 17
let criacao = [ 
{"nomeOBJ" : "Banho", "descricaoOBJ" : "Dar banho no cachorro", "dataOBJ" : "2022-01-20"},
{"nomeOBJ" : "estudar", "descricaoOBJ" : "estudar CSS", "dataOBJ" : "2022-01-22"}
]

//colocar quadrado dentro do objeto para poder verificar se foi ele que foi apertado pelo id 

//aperto no quadrado, confere o id que tem o quadrado aperto, muda para concluido 
let m = 0
    let tempoDevida = setInterval( () => {
            
        window.document.querySelector("#tarefa").value = criacao[m].descricaoOBJ
        window.document.querySelector("#nome").value = criacao[m].nomeOBJ
        window.document.querySelector("#data").value = criacao[m].dataOBJ
        

            novatarefa.verificaValores()
            
    }, 3000) ;

    setTimeout(() => {
            
        clearInterval(tempoDevida)    

    }, 6000); 