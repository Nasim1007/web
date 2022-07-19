import React from 'react'
import Cart from '../components/Cart/Cart'

export default function Favorites({favorites, addToCart, addToFavorites, onRemove}) {
  return (
    <div className="favorites">
    <div className="title">
    <h1>Закладки</h1>
    </div>
   <div className="content">
   {
         favorites
         .map((obj, index) => 
           <Cart 
          
           addToCart={addToCart} 
           addToFavorites={addToFavorites} 
           key={index}
           favorited={true} 
           obj={obj} 
           />
         )
       }
   {/* {
     favorites
     .map((obj, index) => 
     <div className="cart" key={index}>
     <div className="favourite">
       <img src= "./img/liked.png" alt='favourite' className='icon11'/>
     </div>
   <img src={obj.photo} className="obj" alt='img_obj'/>
   <p>{obj.title}</p>
   <div className="cart-bottom">
     <div className="price">
       <span>Цена:</span>
       <b>{obj.price} RUB</b>
     </div>
     <button onClick={() => onRemove(obj.id)} >	&times;</button>
   </div>
 </div>  
     )
   } */}
  </div>
   
  </div>
  )
}
