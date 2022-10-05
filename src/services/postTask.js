import React from 'react'
import axios from 'axios'

const postTask = async (task) => {
  
    const res = await axios.post(
        'https://api-nodejs-todolist.herokuapp.com/task',
        JSON.stringify(task),
        {
            headers: {"Content-Type" : "application/json", 
                    "Authorization": localStorage.getItem('token')}
        }
    );

    return true



}

export default postTask