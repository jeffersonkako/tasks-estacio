import React, {useEffect, useState} from "react";
import { AiOutlineCheckCircle,AiOutlineCloseCircle } from "react-icons/ai";
import {toast} from "react-toastify";

const TarefasOpen = ({tarefa,editar,open,setExibirTarefa}) => {
  const [formData, setFormData] = useState({...tarefa});
  const[visivel, setVisivel] = useState(open)

  useEffect(()=>{
    setVisivel(open)
  },[open])

  const notify = (text) => toast.info(`Tarefa: "${text}" Atualizada!`);

  const ConfirmClick = () => {
    editar(formData)
    setExibirTarefa(false);
    notify(tarefa.title);
  };

  const CancelClick = () =>{
    setExibirTarefa(false);
  }

  return (
      <div className={`flex justify-center w-full mb-2 mt-5 border border-yellow-500 ${(!visivel ? 'hidden' : '')}`}>
        <section className="w-full">
          <div className="">
            <span className="block font-medium text-white mt-2 ml-3">Editar Tarefa</span>
            <textarea
                className="m-5 w-3/4 bg-gray-100 text-gray-800 py-2 px-3 rounded-md resize-none"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            ></textarea>
          </div>
          <div className="mt-2">
            <span className="block font-medium text-white ml-3">Editar Prioridade</span>
            <select
                id="priority"
                className="w-1/4 bg-white text-gray-800 py-2 px-3 m-5 rounded-md"
                value={formData.relevance}
                onChange={(e) => setFormData({ ...formData, relevance: e.target.value })}
            >
              <option value="none">Nenhuma</option>
              <option value="high">Alta</option>
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
            </select>
          </div>
          <div className="flex justify-left">
            <AiOutlineCheckCircle onClick={ConfirmClick} className="m-5 text-green-500 text-4xl" />
            <AiOutlineCloseCircle onClick={CancelClick} className="m-5 text-red-500 text-4xl" />
          </div>
        </section>
      </div>
  );
};

export default TarefasOpen;