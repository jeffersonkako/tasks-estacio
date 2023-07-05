import ControleTarefasDb from "./ControleDbTarefas";
import { Tarefa } from "../modelo/Tarefa";

import { ITask } from "@/db/Tarefas";

interface IControleTarefas {
  obterTarefas(): Promise<Tarefa[]>;
  incluir(tarefa: Tarefa): void;
  editar(tarefa: Tarefa): void;
  excluir(id: string): void;
}

export default class ControlDb {
  control: IControleTarefas;

  constructor() {
    this.control = new ControleTarefasDb();
  }

  public async obterTarefas() {
    const response = await this.control.obterTarefas();
    return response;
  }

  public incluir(tarefa: Tarefa) {
    this.control.incluir(tarefa);
  }

  public editar(tarefa: Tarefa) {
    this.control.editar(tarefa);
  }

  public excluir(id: number) {
     
    const _id: string = id.toString();
    this.control.excluir(_id);
  }
}
