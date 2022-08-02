import React from 'react'
import './Label.css'

export function Label({text}) {
  return (
    <div className='label-container'>
      <label>{text}</label>
    </div>
  )
}
