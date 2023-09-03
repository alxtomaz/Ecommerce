import React from 'react'
import logodnc from '../../assets/logo-dnc.png'
import cartshop from '../../assets/cartshop.png'
import './index.scss'

const HeaderMenu = () => {
  return (
    <header className='header-menu'>
        <img src={logodnc} alt='ERROR'/>
        <ul className='header-menu__ul'>
            <li>Home</li>
            <li>Novidades</li>
            <li>Feminino</li>
            <li>Masculino</li>
            <li>Atendimento</li>
        </ul>
        <div className='header-menu__cart'>
            <h1>Meu carrinho</h1>
            <img src={cartshop} alt='ERROR'/>
        </div>
    </header>
   
  )
}

export default HeaderMenu