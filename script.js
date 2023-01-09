
function mostrar(){

    document.querySelector("#sups").style.display = "flex"

}

function cancelar(){

    document.querySelector("#nome").value == ""
    document.querySelector("#tarefa").value == ""
    dataVal.value == ""

    document.querySelector("#sups").style.display = "none"

}

function atualizaData(){

    let dataAtual = new Date;
    let hoje = dataAtual.getDate() 
    let mes  = (dataAtual.getMonth() + 1)
    let ano  = dataAtual.getFullYear()

    if (mes < 10){
        mes = "0" + mes
    }

    dataAtual = `${ano}-${mes}-${hoje}`

    return dataAtual
}

let idVal = 0
function receberDados(){

    let tarefa = { 
        id: idVal,
        nome: document.querySelector("#nome").value,
        descricao: document.querySelector("#tarefa").value,
        prazo: document.querySelector("#data").value,
        data: atualizaData(),
        status: ""
    }

    var novatarefa = new Tarefa()

    novatarefa.verificaValores(tarefa.id, tarefa.nome, tarefa.descricao, tarefa.data, tarefa.status)

}

let listaTarefas = [];
let numArray = 0
let numCon = 0 

let dataFull

class Tarefa {  

    constructor(id, nome, descricao, prazo, data, status) {

    this.id = id
    this.nome = nome;
    this.descricao = descricao;
    this.prazo = prazo
    this.data = data;
    this.status = status

    }

    verificaValores(){

        let msg = ""

        if ( this.nome == ""){

            msg = "Digite o nome da nova tarefa \n"

        } if (this.descricao == "") {

            msg += "Digite a descrição da tarefa \n"

        } if (this.prazo ==  0 ) {

            msg += "Digite um data para a tarefa"

        } if(msg == "") {

            this.salvar()  
        
        } else {

            alert(msg)

        }

    }

    salvar(){

        let tarefa = { 
            id: this.id,
            nome: this.nome,
            descricao: this.descricao,
            prazo: this.prazo,
            data: this.data,
            status: this.status
        }

        listaTarefas.push(tarefa)
        this.criar(data, listaTarefas)
                
    }

    criar(data){    

        let existe = 0;
    
        let container = document.createElement("div")
            container.classList.add("listaFazer")

        if ( data == dataFull){

            let hAtrasada = document.createElement("h5")
                hAtrasada.innerText = "Essa tarefa é para hoje"
                    hAtrasada.classList.add("paraHoje")
                        existe++;
        }

        let Hnome = document.createElement("h3")
            Hnome.innerText = this.nome
                Hnome.classList.add("titulo")
                
                    let quadrado = document.createElement("input");
                        quadrado.setAttribute("type", "checkbox")
                            quadrado.classList.add('quadradostyle');
                                quadrado.addEventListener("change", function x(){

                                    concluir(this.id, container, quadrado)

                                })
                                
            Hnome.appendChild(quadrado)
                            
        let Pdescriscao = document.createElement("p")
            Pdescriscao.innerText = this.descricao
                Pdescriscao.classList.add("HN")

        let Pdata = document.createElement("p")
                Pdata.innerText = this.prazo
                    Pdescriscao.appendChild(Pdata)

        if ( existe === 1){
            
        container.appendChild(Hnome)  
        container.appendChild(hAtrasada)             
        container.appendChild(Pdescriscao)

        } else {
            
        container.appendChild(Hnome)    
        container.appendChild(Pdescriscao)

        }

       document.querySelector("#fazer").appendChild(container)

        this.registrar()

        return container 

    }

    registrar(){
        
            numArray++
            document.querySelector("#nunFaz").innerText = numArray
            document.querySelector("#nome").value == ""
            document.querySelector("#tarefa").value == ""
            document.querySelector("#data").value

        return numArray

    }

    concluir(id, container, quadrado){

    for(let i = 0 ; i < listaTarefas.length; i++){

        if(listaTarefas[i].id == id){

            listaTarefas.splice(i, 1)

        }
    }       

    if(quadrado.checked == true){

        container.animate(
            [
                {
                    opacity: '0.900'
                },
                {

                    opacity: '0.720'
                
                },
                {
                
                    opacity: '0.540'
                
                }, 
                {
                
                    opacity: '0.360'
                
                }, 
                {
                
                    opacity: '0.180'
                
                }, 
                {
                
                    opacity: '0'

                }
            ],
            
            {
                duration: 1000,
                iterations: 1
            }
    
        )

        setTimeout(() => {

            container.classList.remove("listaFazer")
            container.classList.add("listaConcluidas")
            document.querySelector("#concluidos").appendChild(container)

            numArray--
            document.querySelector("#nunFaz").innerHTML = numArray;

            numCon++
            document.querySelector("#numCon").innerHTML = numCon
                
        }, 1000);
        
        } 
        
        else {

            container.animate(
                [
                    {
                        opacity: '0.900'
                    },
                    {
    
                        opacity: '0.720'
                    
                    },
                    {
                    
                        opacity: '0.540'
                    
                    }, 
                    {
                    
                        opacity: '0.360'
                    
                    }, 
                    {
                    
                        opacity: '0.180'
                    
                    }, 
                    {
                    
                        opacity: '0'
    
                    }
                    
                ],
                {
                    duration: 1000,
                    iterations: 1
                }
            )

            setTimeout(() => {

                container.classList.remove("listaConcluidas")
                document.querySelector("#concluidos").removeChild(container)
                container.classList.add("listaFazer")
                document.querySelector("#fazer").appendChild(container)

                numArray++
                document.querySelector("#nunFaz").innerHTML  = numArray;

                numCon--
                document.querySelector("#numCon").innerHTML = numCon
                
            }, 1000);
        }
    
        return numArray
    
    }
}


