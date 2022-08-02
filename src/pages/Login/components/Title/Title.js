import React from 'react'
import './Title.css'

export function Title({text}) {
  return (
    <div className='title-container'>
      <h3 className='title-contain'>{text}</h3>
    </div>
  )
}
