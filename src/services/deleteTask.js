import React from "react";


const deleteTask = (id) => {

    fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
        method: 'DELETE',
        headers: { "content-type": "application" },
        Authorization: `${localStorage.getItem("token")}`,
    })
        .then((response) => response.json())
        .then((result) => {
            alert('Success:', result);
        })
        .catch((error) => {
            alert('Error:', error);
        });

}

export default deleteTask;