"use client";
import React, {useState, useEffect} from "react";
import InputNovaTarefa from "./inputNovaTarefa";
import Tarefas from "./Tarefas";
import ControleTarefas from "../controle/ControleTarefas";

import {ATIVE_DB} from "../../setDB";
import {ToastContainer} from "react-toastify";

const MainComponent = () => {
    const [listaTarefas, setListaTarefas] = useState([]);
    const [tarefasTemp, setTarefasTemp] = useState([]);
    const [alteracaoTarefas, setAlteracaoTarefas] = useState(false);
    const controle = new ControleTarefas();

    // fetchData precisa ficar como assincrona para quando
    // mudar o chaveamento para o mongoBD atravé de
    // setDB.ts e .env.local

    // Precisei adaptar o id do banco p/ o id padrão do projeto
    // por isso o uso do ATIVE_DB

    const fetchData = async () => {
        let aData = await controle.obterTarefas();

        if (ATIVE_DB) {
            aData = aData.map(({_id, title, relevance, completed}) => ({
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
        //fetchData()
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
        // persistir em localStorage ou MongoDb
        controle.editar(tarefa)
        // forçar refresh
        setAlteracaoTarefas(!alteracaoTarefas);
    };

    return (
        <>
            <div
                className="max-w-[800px] container bg-[#23262c] drop-shadow-[0px_5px_10px_rgba(0,0,0,0.60)] mx-auto rounded-[20px] w-9/12 mt-5 px-10 py-10">
                <h1>Adicione sua tarefa: </h1>
                <InputNovaTarefa incluirTarefa={incluirTarefa}/>
                {listaTarefas.map((tarefa) => (
                    <Tarefas
                        key={tarefa.id}
                        tarefa={tarefa}
                        editar={editar}
                        excluir={excluirTarefa}
                        onToggle={onToggle}
                    />
                ))}
            </div>
            <ToastContainer/>
        </>
    );
};

export default MainComponent;
