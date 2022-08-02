import React, {useEffect, useState} from 'react'
import { Checkbox } from './components/Checkbox/Checkbox'
import { Input } from './components/Input/Input'
import { Label } from './components/Label/Label'
import { Title } from './components/Title/Title'

import './Login.css'

export function Login() {

  useEffect(() => {
    document.title = "Login | Sistema Practico"
  })

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (name, value) => {
    if (name === 'user') {
      setUser(value)
    }
    else if (name === 'password') {
      setPassword(value)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let account ={user, password}
    if (account) console.log('Cuenta: ', account);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title text='Inicio de sesión'/>
      <Label text='Usuario'/>
      <Input
      atr={{
        id: 'user',
        name: 'user',
        type: 'text',
        placeholder: 'Ingresar usuario',
        required: true
      }}
      handleChange={handleChange}
      />
      <Label text='Contraseña'/>
      <Input
      atr={{
        id: 'password',
        name: 'password',
        type: 'password',
        placeholder: 'Ingresar contraseña',
        required: true
      }}
      handleChange={handleChange}
      />
      <Checkbox text='Recuerdame'/>
      <div className='login-submit-container'>
        <button type='submit' className='login-submit-button'>Iniciar sesión</button>
      </div>
    </form>
  )
}
