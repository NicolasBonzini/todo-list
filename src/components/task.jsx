import React from 'react'
import './task.css'

export default function task({_id, description, completed}) {
  return (
    <ul className={'state' + completed}>
        <li><strong>Estado:</strong> {completed ? 'Finalizado' : 'En proceso'}</li> 
        <li><strong>Titulo:</strong> {description}</li>
    </ul>
  )
}
