import React from 'react'
import Header from '../../components/header/header'
import { Link, useParams } from 'react-router-dom'
import './index.scss'

const Pay = ({data}) => {
  const {payId} = useParams()
  const selectedProduct = data.find((tantofazPay) => tantofazPay.id == payId)
  data = selectedProduct
  return (
    <section >
    <Header/>
    <div className='pay-detail'>
      <div className='pay-detail__left-side'>
        <div className='pay-detail__input-wrapper'>
          <label>Nome:</label>
          <input placeholder='Nome completo' id='nome'></input>
          <label>Endereço de entrega:</label>
          <input placeholder='Endereço de entrega' id='endereço'></input>
          <label>Forma de pagamento</label>
        </div>
        <div className='pay-detail__checkbox'>
          <ul>
            <li><input value='Pix' id='Pix' type='radio' name='Pix'></input> Pix</li>
            <li><input value='Pix' id='boleto' type='radio' name='Pix'></input> Boleto</li>
            <li><input value='Pix' id='credit card' type='radio' name='Pix'></input> Cartão de Crédito</li>            
          </ul>
        </div>          
          <button type='submit'><Link to='/home'>Enviar Pedido</Link></button>       
      </div>
      <div className='pay-detail__right-side'>
        <h1>Resumo do Pedido:</h1>
        <div className='pay-detail__product-price'>
          <p className="pay-detail__description"><strong>Produtos: </strong>{data.title}</p>
          <h1>{data.price}</h1>
        </div>
        <div className='pay-detail__product-total'>
          <h2 className="pay-detail__description">Total:</h2>
          <h1>{data.price}</h1>
        </div>
      </div>
    </div>
  
  </section>
)
}
export default Pay