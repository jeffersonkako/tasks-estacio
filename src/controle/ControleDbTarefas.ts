
import { Tarefa } from "../modelo/Tarefa";
 
  interface IControleTarefas {
    obterTarefas(): Promise<Tarefa[]>;
    incluir(tarefa: Tarefa): void;
    editar(tarefa: Tarefa): void;
    excluir(id: string): void;
  }
  
 export default class ControleTarefasDb implements IControleTarefas{
  
  public async obterTarefas(): Promise<Tarefa[]>{
     const  tarefas=fetch('/api/tasks',{method: "GET"})
         .then((response) => response.json())
     return tarefas;    
        
  } 
  
  public async  incluir(task: Tarefa) {
    const tTask = {
        title:task.title,
        relevance:task.relevance,
        completed:false
    };
    
    console.log('em tarefas db',task)
    fetch('/api/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(tTask),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  public async excluir (id: string)  {
    fetch(`/api/tasks/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.ok) {
          console.log('Tarefa excluída com sucesso');
        } else {
          console.error('Erro ao excluir a tarefa');
        }
      })
      .catch((error) => {
        console.error('Erro na requisição', error);
      });

  }

  public async editar (task: Tarefa) {
    try {
        
      let id: string | undefined = task.id?.toString();
      const updateData={ 
        "id":id,
        "title":task.title,
        "relevance":task.relevance,
        "completed": task.completed }
      const data = JSON.stringify(updateData)
  
   
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });
  
      const data2 = await response.json();
      console.log('retorno =>>>',data2); // Exibir a resposta da API no console
    } catch (error) {
      console.error(error);
    }
  }

 } 
