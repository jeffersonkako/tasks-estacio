import React, {useRef, useState} from "react";
//REACT-TOASTIFY
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//REACT-ICONS
import { FiPlusCircle } from "react-icons/fi";

const InputNovaTarefa = ({incluirTarefa}) => {

    //Numero das teclas Enter e Esc
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;
    const notify = (text) => toast.success(`Tarefa: "${text}" adicionada!`);

    const [inputValue, setInputValue] = useState("");

    //Focus no input
    const inputRef = useRef(null)

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    //limpar formulario
    const erase = () => {
        setInputValue(""); // Limpa o valor do input após a inclusão da tarefa
    }

    const handleIncluirTarefa = () => {
        if (inputValue) {
            incluirTarefa(inputValue)
            notify(inputValue);
            erase();
        }
        inputRef.current.focus();
    };

    //Funcao que envia formulario pelo teclado
    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
            handleIncluirTarefa()
        } else if (event.which === ESCAPE_KEY) {
            erase();
        }
    }

    return (
        <div className="flex flex-row w-full mb-[25px]">

            <input
                className="text-black flex-grow ml-0 px-4 py-3 rounded-md mb-1"
                type="text"
                placeholder="Digite aqui"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef}
                onKeyDown={onKeyDown}
            />
            <FiPlusCircle className="w-9 h-10 mt-1 mx-2 cursor-pointer text-white hover:text-emerald-500"
                    onClick={handleIncluirTarefa}/>
        </div>
    );
};

export default InputNovaTarefa;
