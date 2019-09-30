# projeto-todolist
Consiste em criar uma "lista de tarefas" para organizar e priorizar tarefas. Tem como objetivo exercitar os conhecimento adquiridos em HTML, CSS, Javascript e lógica.



    Fase 1
    
        *Adicionar itens na lista
        
        -criar arquivo html com as divs de titulo, o espaço de input e o botão add
        -colocar texto do input como tarefa a fazer, (embaixo - como comentario)
        -no botão add inserir um event listener para o click
        
        *Poder dar check neles
        -criar classe no css para a tarefa ( classe com a tarefa a fazer e concluida)
        -colocar um event listener na tarefa enviada para ficar como concluida             
        
        *Validar campo de texto para não entrar itens vazios
        -criar condicional para usar o trim e não poder enviar itens vazios
        
        *Limpar campo de texto depois que insere o item na lista
        deixar a caixa 
        -usar o input.value = "" ou input.remove para a caixa ficar limpa depois de add o conteudo.      
        
                     
    Fase 2
    
       * Poder excluir itens da lista individualmente;
       -event listener no "x" e remover a classe quando selecionado
        
                   
        
    Fase 3
    
        *Marcar todos os itens como feito
        fazer o botao de check all- colocar um event listener nele no qual coloca a mesma classe de 'check' em todos os itens 
        (é um loop)       
        
        Limpar lista, excluir todos os itens da lista
        
        um loop que remove a classe de tudo e 'apaga'
        
    Fase 4
    
        Não permitir que um item seja adicionado se só tiver espaços e nenhum texto no input
    Fase 5
    
        Permitir drag and drop pra reorganizar a lista
