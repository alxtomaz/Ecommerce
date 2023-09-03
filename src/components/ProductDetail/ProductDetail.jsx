import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

const ProductDetail = ( {data}) => {
  console.log(data)
  return (
    <div className='productDetail'>
      <div className='productDetail__left-side'>
        <div className='productDetail__card'>
          <img src={data.imgPathDetail} alt={data.title}/>
          <p>{data.title}</p>
        </div>
        <div className='productDetail__card-descriptions'>
          <h1>Descrição</h1>
          <p>{data.title}</p>
        </div>
      </div>
      <div className='productDetail__right-side'>
        <h1>Informações sobre o produto</h1>
        <h2>{data.price}</h2>
        <p>
          {/* o objetivo desse if ternario é a questão da virgula, onde ele quer colocar virgular se tiver mais de um item */}
          Cor: {" "}
          {data.colors.length === 1
            ? data.colors.map((color, index) => 
                <span key={index}>{color}</span>)
            : data.colors.map((color, index) =>
                index + 1 === data.colors.length ? ( 
                  <span key={index}>{color}</span>
                  ) : (
                  <span key={index}>{color}, </span>)
          )}
        </p>
        <div className='productDetail__cube-colors'>
          {data.colors.map((color) => (
            <div
              style={{
                width: "64px",
                height: '60px',
                borderRadius: '10px',
                backgroundColor: color,
                border: '2px solid grey',
              }}
            ></div>
          )
          )}
        </div>
        <p>Tamanho:</p>
        <div className='productDetail__cube-size'>
          {data.sizes.map((size, index) => (
            <div
              style = {{
                width: "50px",
                height: '50px',
                borderRadius: '10px',
                border: '2px solid black',
                padding: "15px",
                textTransform: "uppercase",
                textAlign: "center",
            }}
            >{size}</div>
          ))}

        </div>
        <button><Link to={`/pay/${data.id}`}>Finalizar Compra</Link></button>
      </div>
    </div>
  )
}

export default ProductDetail