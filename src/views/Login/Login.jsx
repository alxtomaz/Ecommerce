import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Header from '../../components/header/header'

const Login = () => {
  return (  
    <section className='login '>
        <Header/>
        <form className='login__form'>
          <h1>Acesse com seu login ou cadastre-se!</h1>
          <h2>você pode entrar com o seu CPF</h2>
          <div className='login__input-wrapper'>
            <label>Digite seu CPF:</label>
            <input 
              type='text' 
              placeholder='Nome completo'
              id='name'
              className='login__input-name'
              ></input>
            <label>Senha:</label>
            <input 
              type='password' 
              placeholder='***************'
              id='password'
              className='login__input-name'
              ></input>
          </div>
          <button type='submit'><Link to={'/home'}>Entrar</Link></button>
        </form>
      </section>
  )
}

export default Login