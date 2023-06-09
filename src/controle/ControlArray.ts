import ControleTarefasArray from "./ControleArrayTarefas";
import { Tarefa } from "../modelo/Tarefa";

interface IControleTarefas {
  obterTarefas(): Tarefa[] ;
  incluir(tarefa: Tarefa): void;
  editar(tarefa: Tarefa): void;
  excluir(id: number): void;
}

export default class ControlArray {
  control: IControleTarefas;

  constructor() {
    this.control = new ControleTarefasArray();
  }

  public obterTarefas() {
    return this.control.obterTarefas();
     
  }

  public incluir(tarefa: Tarefa) {
    this.control.incluir(tarefa);
  }

  public editar(tarefa: Tarefa) {
    this.control.editar(tarefa);
  }

  
  public excluir(id: number) {
    this.control.excluir(id);
  }
}
