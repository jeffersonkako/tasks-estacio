import React, { useState } from "react";

import { FiEdit, FiCheckCircle, FiXCircle } from "react-icons/fi";

import TarefasOpen from "@/components/TarefasOpen";
import { toast } from "react-toastify";

const Tarefas = ({ tarefa, editar, excluir, onToggle }) => {
  const[exibirTarefa, setExibirTarefa] = useState(false)

  //OBS olhar se vai precisar dessa State
  // as mudancas de checke ja esta sendo feita direto no iten do objeto
  const [isChecked, setIsChecked] = useState(false);

  const editTask = (id) => {
    if (id) {
      setExibirTarefa(true)
    }
  };

  const notify = (text) => toast.error(`Tarefa: "${text}" Excluida!`);

  const handleCheckboxChange = (e) => {
    console.log("evento handleCheckboxChange");
    setIsChecked(e.target.checked);
  };

  const relevanciaClasses =
    tarefa.relevancia === "importante"
      ? "border-l-4 border-yellow-400 border-solid rounded-lg"
      : tarefa.relevancia === "urgente"
      ? "border-l-4 border-red-500 border-solid rounded-lg"
      : "";

  return (
    <div
      className={`flex flex-wrap items-center justify-center w-full mb-3 ${relevanciaClasses} ${
        isChecked ? "bg-gray-200" : ""
      }`}
      key={tarefa.id}
    >
      <div className="flex flex-wrap items-center w-full bg-white shadow-md p-2 rounded-md">
        <div
          className={[
            "w-10/12 bg-white text-gray-700 py-1 px-2 ml-5 rounded-md",
            tarefa.completed ? "line-through text-gray-300" : "",
          ].join(" ")}
        >
          {tarefa.title}
        </div>

        <div className="w-1/12 flex justify-end">
          <div className="flex items-center space-x-2">
            
            <FiCheckCircle
              onClick={() => {
                // marcar opção no item do array : completa ou não
                tarefa.completed = !tarefa.completed;
                // marcar opção na variavel
                setIsChecked(!tarefa.completed);
                // função de persistencia em Main.Contents
                onToggle(tarefa);
              }}
              className="mt-2 text-gray-300 text-[25px] hover:text-emerald-500 cursor-pointer"
            />

            <FiXCircle
              className="mt-2 text-gray-300 text-[25px] hover:text-red-500 cursor-pointer"
              onClick={() => {
                notify(tarefa.title);
                excluir(tarefa.id);
              }}
            />

            <FiEdit
              className="mt-2 text-gray-300 text-[25px] hover:text-yellow-500 cursor-pointer"
              onClick={() => editTask(tarefa.id)}
            />
          </div>
        </div>
      </div>
      <TarefasOpen open={exibirTarefa} tarefa={tarefa} editar={editar} setExibirTarefa={setExibirTarefa} />
    </div>
  );
};


export default Tarefas;
