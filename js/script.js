// -colocar texto do input como tarefa a fazer, (embaixo - como comentario)
// -no botão add inserir um event listener para o click

const formulario = document.getElementById ('insiraTarefa');// aonde coloquei meu event listener
const inputTarefa = document.getElementById('inputTarefa');// aonde eu escrevo texto da minha tarefa
const toDo = document.getElementById('toDo');// ul onde vou deixar todas minhas tarefas
// const botao = document.getElementById('btnAdd');// chamei o meu botão... não sei pq
const allToDo = document.getElementById('allToDo')// minha div com minha lista ?? 
//fazendo o form ouvir o evento de add
const erro = document.createElement('p')
allToDo.appendChild(erro); 
let btnSelect= document.getElementById ("btnSelect")
let btnDelete= document.getElementById ("btnDelete")





// const checkTarefa = tarefa.classList('checkTarefa')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    let tarefa = inputTarefa.value;
    
    if (tarefa.trim()==''){      
        erro.textContent = 'escreva algo linda!';
        erro.classList.add('erro');
    }else{
        erro.textContent='';
        erro.classList.remove('erro');
        formulario.reset();

        let divFilha = document.createElement('div')
        toDo.appendChild(divFilha);
        divFilha.classList.add("tarefa")


        let todasTarefas = document.createElement('p')
        divFilha.appendChild(todasTarefas);
        todasTarefas.textContent = tarefa;    
        todasTarefas.classList.add('textoTarefa')

        let botaoX = document.createElement('button')
        divFilha.appendChild(botaoX);        
        botaoX.setAttribute('class', 'botaoX')
        botaoX.textContent = 'X'

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
           
        
       
     } 
     
     
// allToDo.setAttribute("draggable", true)
// toDo.setAttribute("draggable", true)
// todasTarefas.setAttribute("draggable", true)


// allToDo.addEventListener("dragStart"function(ev){
//     dragging = ev.target.closest(".div")
// })
 

// allToDo.addEventListener("dragover", function(ev){
//     ev.preventDefault()
//     const node = ev.target.closest(",div")
//     this.insertBefore(dragging, node)
// })
   

// allToDo.addEventListener("dragend", function(ev){

// dragging = null
// )}


})










// function drop(ev){
//     ev.target.append(document.getElementById(id))
// }







