import React from 'react'
import getTasks from '../services/getTasks';
import { useState, useEffect } from 'react';

const TasksList = () => {
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setLoading(false);
        getTasks()
        .then(data => setTasks(data.data.data));
    }, [])
    
    return (
        <div>
            <h2>Listado de Tareas</h2>
            {console.log(tasks)}
            <div>{loading? <h6>Cargando...</h6> : <p></p>}</div>
            <div>
                {tasks.length === 0? <p>Usted no tiene tareas</p> :
                 tasks.map(task => <p key={task._id}>Descripcion: {task.description}</p>)}
            </div>
        </div>
    )
}

export default TasksList