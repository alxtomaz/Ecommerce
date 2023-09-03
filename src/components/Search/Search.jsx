import React from 'react'
import './index.scss'
import lupa from '../../assets/search.png'
import profile from '../../assets/profile.png'
import heart from '../../assets/heart.png'
import teste from '../../assets/heart.png'

const Search = () => {
  return (
    <div className='search'>
        <div className="search__input-container">
            <img src={lupa} alt='ERROR' className='search__search-logo'/>
            <input tipe='text' placeholder='O que você está procurando ?'></input>
        </div>
            <img SRC={profile} alt='ERROR'/>
            <img SRC={heart} alt='ERROR'/>
    </div>
  )
}

export default Search