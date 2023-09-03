import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './index.scss'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import ProductDetail from '../../components/ProductDetail/ProductDetail'

function Products( {data}) {

  //ele pegar o valor do object, que é informado atraves do produto escolhido na home useParams, valida o que está na URL
  const {productId} = useParams();
  console.log(productId)
  const selectdProduct = data.find((tantofazproduct => tantofazproduct.id == productId))

  return (
    <section className=''>
        <HeaderMenu/>
        <Search/>
        <ProductDetail data={selectdProduct}/>
    </section>
  )
}

export default Products