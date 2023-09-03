import React from 'react'
// import { Link } from 'react-router-dom'
import './index.scss'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import ProductsCard from '../../components/ProductsCard/ProductsCard'

export const Home = ({data}) => {
  console.log(data)
  return (
    <div className='home'>
        <HeaderMenu/>
        <Search/>
        <div className='home__products'>
            {data.map((tantofazproduct) => (
              <ProductsCard key={tantofazproduct.id} data={tantofazproduct}/>
            ))}
        </div>
        
    </div>
    
  )
}

export default Home