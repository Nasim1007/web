import React, {useState} from 'react'
import Cart from '../components/Cart/Cart'


export default function Home({addToFavorites, addToCart, objs}) {
    const [searchValue, setSearchValue] = useState('')
    const onSearchInput = (event) => {
        setSearchValue(event.target.value)
      }
  return (
    <div className="home">
        <div className="title">
        <h1>{searchValue ? `Поиск по запросу: ${searchValue}` :'Все кроссовки'}</h1>
        <div className="search-box">
          <img src="./img/search.png" className="icon11" alt="search"/>
          <input type='text' onChange={onSearchInput} value={searchValue} placeholder='search...'/>
          {searchValue && <button className="remove-btn" onClick={() => setSearchValue('')}>	&times;</button> }
          
        </div>
        </div>
       <div className="content">
       {
         objs
         .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
         .map((obj, index) => 
           <Cart obj={obj} addToCart={addToCart} addToFavorites={addToFavorites} key={index}/>
         )
       }
      </div>
       
      </div>
      
  )
}
