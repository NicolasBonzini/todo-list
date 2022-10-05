import React from 'react'
import {getUserLocalStorage} from '../services/getUserLocalStorage';

const Home = () =>  {

  const user = JSON.parse(getUserLocalStorage());
 

  return (
    <div>
      <h1>Tasks</h1>

      <button>
        <p>{}</p>
        <p>{}</p>
        
      </button>
      
    </div>
  )
}
export default Home;
