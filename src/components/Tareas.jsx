import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Task from './task';
import './task.css'

const cookies = new Cookies();


export default function Tareas() {
    const [allTasks, setAllTasks] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('https://api-nodejs-todolist.herokuapp.com/task', {
            headers: {'Content-Type': 'application/json',
            authorization : `Bearer ${localStorage.getItem('token')}`}
        })
            .then(res => setAllTasks(res.data.data))
    }, [])

    useEffect(() => {
        if (cookies.get('btnFilter') == 1) {
            setTasks(allTasks.filter(x => x.completed))
        } else if(cookies.get('btnFilter') == 0) {
            setTasks(allTasks.filter(x => !x.completed))
        } else{
            setTasks(allTasks)
        }
    }, [allTasks])
    
    function handlerTask({target}){
        if (target.innerText === 'Completadas'){
            cookies.set('btnFilter', 1, {path: '/tasks'})
            setTasks(allTasks?.filter(x => x.completed))
        } else if (target.innerText === 'No completadas'){
            cookies.set('btnFilter', 0, {path: '/tasks'})
            setTasks(allTasks?.filter(x => !x.completed))
        } else {
            cookies.set('btnFilter', 'all', {path: '/tasks'})
            setTasks(allTasks)
        }
    }

  return (
    <div>
        <div>
            <button onClick={handlerTask}>Completadas</button>
            <button onClick={handlerTask}>No completadas</button>
            <button onClick={handlerTask}>Todas</button>

        </div>
        <div className='taskContainer'>
            {
                tasks?.map(t => 
                    <Task key={t._id} {...t}  />
                )
            }
        </div>
    </div>
  )
}
