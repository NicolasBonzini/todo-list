import React from 'react'
import { useState } from 'react'
import postTask from '../../services/postTask'



const AddTasks = () => {

    const [loading,setLoad] = useState(false)
    const [botonAgregar, setAgregar] = useState(false)
    const [newTask, setTask] = useState({description: ""})

    const handleButton =()=>{
        setAgregar(!botonAgregar)
    }

    const handleInput = (e)=>{
        console.log(e.target.value)
        setTask({description:e.target.value})
    }

    const handleAdd = async()=>{
        setLoad(true)
        const confirma = await postTask(newTask)

        if(confirma){
            setLoad(false)
        }else{
            console.log('epa,que paso')
        }
        console.log(newTask)
    }
  return (
    <>
    <button onClick={handleButton}>Agregar tarea</button>
    { botonAgregar && 
        <div>
            <label>Ingrese una descripcion de la tarea</label>
            <br/>
            <textarea
            id='newTask'
            name='newTask'
            type='text'
            onChange={handleInput}/>
            <br/>
            <input
            type='checkbox'/>
            <button onClick={handleAdd}>Agregar</button>
        </div>}
    {loading && <h2>Agregando tarea</h2>}
    </>
  )
}

export default AddTasks