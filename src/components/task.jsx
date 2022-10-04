import React from 'react'

export default function task({id, name, state}) {
  return (
    <ul  key={id}>
        <li><strong>Estado:</strong> {state}</li> 
        <li><strong>Titulo:</strong> {name}</li>
        <li><strong>Id:</strong> {id}</li> 
    </ul>
  )
}
