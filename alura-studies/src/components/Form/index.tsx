import React, { useState } from "react";
import Button from "../Button";
import TextField from "../Field/Text";
import TimeField from "../Field/Time";
import style from './Form.module.scss';
import ITasks from "../../types/ITask";
import { v4 as uuidv4 } from "uuid";

const Form = ({setTasks}: {setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>}) => {
    const [taskName, setTaskName] = useState('');
    const [taskTime, setTaskTime] = useState('00:00:00');

    const saveTask = () => {
        setTasks(oldTasks => [...oldTasks, {
            id: uuidv4(),
            name: taskName,
            time: taskTime,
            selected: false,
            completed: false
        }])

        setTaskName('');
        setTaskTime('00:00:00');
    }

    return (
        <form
            className={style.newTask}
            onSubmit={(e:React.FormEvent<HTMLFormElement>) => {e.preventDefault(); saveTask()}}
        >
            <TextField value={taskName} onChange={setTaskName} />
            <TimeField value={taskTime} onChange={setTaskTime}/>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

export default Form;