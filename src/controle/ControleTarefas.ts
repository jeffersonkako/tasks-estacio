 
import { ATIVE_DB } from "../../setDB";
import ControlArray from "./ControlArray";
import ControlDb from "./ControlDB";

import { ITask } from "@/db/Tarefas"; 


const useDB =ATIVE_DB ;

export default class ControleTarefas {
  control: ControlArray | ControlDb;

  constructor() {
    if (useDB) {
      this.control = new ControlDb();
      console.log("utilizando o mongoDB como provider ");
       
    } else {
      this.control = new ControlArray();
      console.log("utilizando o array como provider ");
    }
  }

  public obterTarefas() {
    const data = this.control.obterTarefas();
    return data;
  }

  public editar(tarefa: ITask) {
    this.control.editar(tarefa);
  }

  public excluir(id: number) {
    console.log('controle tarefas excluir',id)
    this.control.excluir(id);
  }

  public incluir(tarefa: ITask) {
    this.control.incluir(tarefa);
  }
}
