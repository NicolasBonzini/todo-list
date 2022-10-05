import React from "react";


const updateTask = (completed, id) => {

    fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
        method: 'PUT',
        headers: { "content-type": "application" },
        Authorization: `${localStorage.getItem("token")}`,
        body:{"completed": completed}
    })
        .then((response) => response.json())
        .then((result) => {
            alert('Success:', result);
        })
        .catch((error) => {
            alert('Error:', error);
        });

}

export default updateTask