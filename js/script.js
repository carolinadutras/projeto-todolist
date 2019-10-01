
// -colocar texto do input como tarefa a fazer, (embaixo - como comentario)
// -no botão add inserir um event listener para o click

const formulario = document.getElementById ('insiraTarefa');// aonde coloquei meu event listener
const inputTarefa = document.getElementById('inputTarefa');// aonde eu escrevo texto da minha tarefa
const toDo = document.getElementById('toDo');// ul onde vou deixar todas minhas tarefas
// const botao = document.getElementById('btnAdd');// chamei o meu botão... não sei pq
const allToDo = document.getElementById('allToDo')// minha div com minha lista ?? 
//fazendo o form ouvir o evento de add
const erro = document.createElement('p')
toDo.appendChild(erro); 

// const checkTarefa = tarefa.classList('checkTarefa')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log(inputTarefa.value); 
    let tarefa = inputTarefa.value;
    
    if (tarefa.trim()==''){      
        erro.textContent = 'escreva algo linda!';
        erro.classList.add('erro');
    }else{
        erro.textContent='';
        erro.classList.remove('erro');
        formulario.reset();

        let divFilha = document.createElement('div')
        allToDo.appendChild(divFilha);


        let todasTarefas = document.createElement('p')
        divFilha.appendChild(todasTarefas);
        todasTarefas.textContent = tarefa;    
        todasTarefas.classList.add('tarefa')

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
            }
   
})