
// -colocar texto do input como tarefa a fazer, (embaixo - como comentario)
// -no botão add inserir um event listener para o click

const formulario = document.getElementById ('insiraTarefa');// aonde coloquei meu event listener
const inputTarefa = document.getElementById('inputTarefa');// aonde eu escrevo texto da minha tarefa
const toDo = document.getElementById('toDo');// ul onde vou deixar todas minhas tarefas
// const botao = document.getElementById('btnAdd');// chamei o meu botão... não sei pq
// const allToDo = document.getElementById('allToDo')// minha div com minha lista ?? 
//fazendo o form ouvir o evento de add


let btnSelect= document.getElementById ("btnSelect");
let btnDelete= document.getElementById ("btnDelete");

// const checkTarefa = tarefa.classList('checkTarefa')

let divErro = document.querySelector('.divErro');
let erro = document.createElement('p');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    let tarefa = inputTarefa.value;
    let dragging;  

    tarefa = tarefa.trim();

    if (tarefa === ''){      
       
        erro.textContent = 'escreva algo linda!';
        erro.classList.add('erro');
        divErro.appendChild(erro);
    }else{
       
        erro.textContent='';
        // erro.remove('erro')
        erro.remove('erro')
        erro.classList.remove('erro');
        formulario.reset();

        let divFilha = document.createElement('div');
        toDo.appendChild(divFilha)    
    
        let todasTarefas = document.createElement('p')
        divFilha.appendChild(todasTarefas);
        divFilha.classList.add("tarefa");
    
        let botaoX = document.createElement('button')
        divFilha.appendChild(botaoX);        
        botaoX.setAttribute('class', 'botaoX')
        botaoX.textContent = 'X'
    
        toDo.setAttribute('draggable','true');
        divFilha.setAttribute('draggable','true');
        todasTarefas.setAttribute('draggable','true');
        botaoX.setAttribute('draggable', 'true');
      
        divFilha.classList.add("tarefa");
        
        todasTarefas.textContent = tarefa;    
        todasTarefas.classList.add('textoTarefa')


        todasTarefas.addEventListener('click', function(){
            
            if (todasTarefas.classList.contains('checkTarefa')){
            todasTarefas.classList.remove('checkTarefa')
            } else{
                todasTarefas.classList.add('checkTarefa')
            }  
        })
        
        botaoX.addEventListener('click', function(){
            divFilha.remove()         
        })


        btnSelect.addEventListener("click", function(){

            if (todasTarefas.classList.contains("checkTodos")){
                todasTarefas.classList.remove("checkTodos")
            }else {
                todasTarefas.classList.add("checkTodos")
            }                 
        })

        btnDelete.addEventListener("click", function(){
            divFilha.remove()
        })
        
        

        toDo.addEventListener('dragstart', function(evento) {
            dragging = evento.target.closest('.tarefa');
            console.log(divFilha)
        })
        
        toDo.addEventListener('dragover', function(evento) {
            evento.preventDefault();
            const node = evento.target.closest('.tarefa')
            this.insertBefore(dragging, node)
            console.log(divFilha)
        })
        
        toDo.addEventListener('dragend', function(evento){
            
            dragging = null
        })   
    }
})

