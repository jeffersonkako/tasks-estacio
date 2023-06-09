
/**
  Pessoal breve explicação do erro dos metodos

  aki opto em chamar a classe de array ou a classe
  usando o banco e sendo assim os metodos são definidos
  nessas classe não aqui nessa função

  poderia usar uma definição de interface porem não
  atenderia porque os metodos do banco precisam ser
  promisses mas o array não

  videm as interfaces em :
    ControleArray.ts
    ControleDb.ts
  
    Sendo assim, defino control como object e os
  metodos acusam erro por falta de definição

Outra 
 
AKI a variavel de ambiente não funcionou
de maneira alguma.

const USAR_DB = process.env.USAR_DB;

Por isso apelei para o arquivo setDB na raiz

*/


 
import { ATIVE_DB } from "../../setDB";
import ControlArray from "./ControlArray";
import ControlDb from "./ControlDB";

import { ITask } from "@/db/Tarefas"; 


const useDB =ATIVE_DB ;

export default class ControleTarefas {
  control: object;

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

  public incluir(tarefa: ITask) {
    this.control.incluir(tarefa);
  }

  public editar(tarefa: ITask) {
    this.control.editar(tarefa);
  }

  public excluir(id: number) {
    console.log('controle tarefas excluir',id)
    this.control.excluir(id);
  }

}
