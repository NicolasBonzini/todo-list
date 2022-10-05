import React from 'react'
import AddTasks from './AddTasks/AddTasks'
import TasksList from './TasksList'
import {getUserLocalStorage} from '../services/getUserLocalStorage';

const Home = () =>  {
  const user = JSON.parse(getUserLocalStorage());
 
  return (
  <div>
    <div>
      <h1>Tasks</h1>
       <button>
        <p>{}</p>
        <p>{}</p>
      </button>
      <AddTasks/>
      <TasksList/>
    </div>
    </div>
  )
}
export default Home;
