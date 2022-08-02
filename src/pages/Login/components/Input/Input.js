import React from 'react'
import './Input.css'

export function Input({atr, handleChange, param}) {
  return (
    <div className='input-container'>
      <input
      id={atr.id}
      name={atr.name}
      placeholder={atr.placeholder}
      type={atr.type}
      required={atr.required}
      onChange={(e) => handleChange(e.target.name, e.target.value)}
      className='input-contain'
      />
    </div>
  )
}
