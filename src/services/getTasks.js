import axios from "axios";

const urlTasks = "https://api-nodejs-todolist.herokuapp.com/task";

const token = localStorage.getItem('token');

const getTasks = async () => {
    try {
        const res = await axios.get(
            urlTasks,
            {
                headers: { "Content-Type": "application/json",
                authorization: `Bearer ${token}` }
            }
        );
        
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};


export default getTasks;
