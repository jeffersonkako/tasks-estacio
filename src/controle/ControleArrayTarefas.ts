import { Tarefa } from "../modelo/Tarefa";
import { ITask } from "@/db/Tarefas";

interface IControleTarefas {
  obterTarefas(): Tarefa[];
  incluir(tarefa: ITask): void;
  editar(tarefa: ITask): void;
  excluir(id: number): void;
}

const KEY = "tarefas";

export default class ControleTarefasArray implements IControleTarefas {
  //private items: Tarefa[];

  private tarefas: Tarefa[] = [
    {
      id: 1,
      relevance: "alta",
      title: "Tarefas da Estacio!",
      completed: false,
    },
    {
      id: 2,
      relevance: "media",
      title: "Tarefas do dia dia!",
      completed: false,
    },
    {
      id: 3,
      relevance: "alta",
      title: "Concluir a missão M2!",
      completed: true,
    },
  ];

  constructor() {
    if (typeof window !== "undefined") {
      const itemsJSON = localStorage.getItem(KEY);
      if (itemsJSON) {
        this.tarefas = JSON.parse(itemsJSON);
      } else {
        this.saveItems();
      }
    }
  }

  getLocalstorage(){
    const itemsJSON = localStorage.getItem(KEY);
    if (itemsJSON) {
      return JSON.parse(itemsJSON);
    } else {
      return [];
    }
  }

  obterMaiorId() {
    let atemp=this.obterTarefas()
    let maiorId = 0;
    for (let i = 0; i < atemp.length; i++) {
      const id = atemp[i].id;
      if (id > maiorId) {
        maiorId = id;
      }
    }
    return maiorId+1;
  }

  public obterTarefas(): Tarefa[] {
    this.tarefas=this.getLocalstorage()
    return this.tarefas;
  }

  public incluir(novaTarefa: ITask): void {
    novaTarefa.id=this.obterMaiorId()
    console.log('novaTarefa',novaTarefa) 
    this.tarefas.push(novaTarefa);
    this.saveItems();
    console.log("tarefa incluir no array", this.tarefas);
  }

  private saveItems(): void {
    localStorage.setItem(KEY, JSON.stringify(this.tarefas));
  }

  public editar(tarefa: Tarefa) {
    let tarefaEditada: Tarefa = {
      id: tarefa.id,
      relevance: tarefa.relevance,
      title: tarefa.title,
      completed: tarefa.completed,
    };

    const novaListaTarefas = this.tarefas.filter(
      (tarefa) => tarefa.id !== tarefaEditada.id
    );
    novaListaTarefas.push(tarefaEditada);
    this.tarefas = novaListaTarefas;
    this.saveItems();
  }

  public excluir(id: number): void {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
    console.log("tarefa excluida no array", this.tarefas);
    this.saveItems();
    
  }
}
