import React, { useState } from 'react'

export default function Cart({obj, addToCart, addToFavorites, favorited = false}){
  // const addedObj = obj
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(favorited)

    const addObj = (obj) => {
      setIsAdded(!isAdded)
      addToCart(obj)    
  }
  // useEffect(()=>{
  //   console.log(isAdded)
  // }, [isAdded])
  const onFavorite = (favObj) => {
    setIsFavorite(!isFavorite)
    addToFavorites(favObj)
  }
  return(
        <div className="cart">
          <div className="favourite" onClick={() => onFavorite(obj)}>
            <img src={isFavorite ? "./img/liked.png" : "./img/unliked.png"}alt='favourite' className='icon11'/>
          </div>
        <img src={obj.photo} className="obj" alt='img_obj'/>
        <p>{obj.title}</p>
        <div className="cart-bottom">
          <div className="price">
            <span>Цена:</span>
            <b>{obj.price} RUB</b>
          </div>
        <button onClick={() => addObj(obj)}>
            <img src={isAdded ? "./img/btn-checked.png" :"./img/plus.png"} alt="plus" className="icon11"/>
          </button>
        </div>
      </div>
    )
}