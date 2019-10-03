
// let inputDaTarefa = document.querySelector('.input')

let btnAdd = document.querySelector('.btnAdd');
btnAdd.classList.add('btnAdd')


const toDo = document.getElementById('toDo')

// const allToDo = document.getElementById ('allToDo')

let inputNovaTarefa = document.querySelector('.inputTask');

const inputTodasTarefas =  document.createElement('p');

const erro = document.getElementById('erro');
erro.classList.add('erro');


btnAdd.addEventListener('click', function(){

toDo.appendChild(inputTodasTarefas);

let tarefa = inputNovaTarefa.value;

console.log(inputNovaTarefa.value);

if (tarefa.trim()==''){
    
    erro.textContent = 'escreva algo linda!'

}
else{
    
    let tarefaAnterior = document.createElement ('p');
    toDo.appendChild(tarefaAnterior);
    tarefaAnterior.textContent = tarefa;
    tarefaAnterior.classList('tarefa')
    inputNovaTarefa == ''
    }

})

