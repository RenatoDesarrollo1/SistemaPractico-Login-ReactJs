import React from 'react'
import './Checkbox.css'

export function Checkbox({text}) {
  return (
    <div className='checkbox-container'>
        <label><input type='checkbox'/> {text}</label>
    </div>
  )
}
