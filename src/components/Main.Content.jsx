"use client";
import React, { useState, useEffect } from "react";
import InputNovaTarefa from "./inputNovaTarefa";
import Tarefas from "./Tarefas";
import ControleTarefas from "../controle/ControleTarefas";

import { ATIVE_DB } from "../../setDB";
import { ToastContainer } from "react-toastify";

const MainComponent = () => {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [tarefasTemp, setTarefasTemp] = useState([]);
  const [alteracaoTarefas, setAlteracaoTarefas] = useState(false);
  const controle = new ControleTarefas();

  const fetchData = async () => {
    let aData = await controle.obterTarefas();

    if (ATIVE_DB) {
      aData = aData.map(({ _id, title, relevance, completed }) => ({
        id: _id,
        title,
        relevance,
        completed,
      }));
    }
    setListaTarefas(aData ? aData : []);
  };

  useEffect(() => {
    fetchData();
  }, [alteracaoTarefas]);

  const editar = (id, relevancia, title, checked) => {
    const tarefa = {
      id: id,
      relevance: relevancia,
      title: title,
      completed: checked,
    };
    controle.editar(id, relevancia, title, checked);
    setAlteracaoTarefas(!alteracaoTarefas);
  };

  const excluirTarefa = (id) => {
    console.log("excluirTarefa", id);
    controle.excluir(id);
    setAlteracaoTarefas(!alteracaoTarefas);
  };

  const incluirTarefa = (inputValue) => {
    const tarefa = {
      relevance: "baixa",
      title: inputValue,
      completed: false,
    };
    controle.incluir(tarefa);
    setAlteracaoTarefas(!alteracaoTarefas);
  };

  const onToggle = (tarefa) => {
    controle.editar(tarefa);
    setAlteracaoTarefas(!alteracaoTarefas);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-white text-2xl font-bold mb-4">Adicione sua tarefa:</h1>
      <InputNovaTarefa incluirTarefa={incluirTarefa} />
      {listaTarefas.map((tarefa) => (
        <Tarefas
          key={tarefa.id}
          tarefa={tarefa}
          editar={editar}
          excluir={excluirTarefa}
          onToggle={onToggle}
        />
      ))}
      <ToastContainer />
    </div>
  );
};

export default MainComponent;

