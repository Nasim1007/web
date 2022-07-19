import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({onClickBasket}) {

  return (
    <header>   
      <Link to ='/'>
    <div className='header-left'>
   
      <img src='./img/logo-sneakers.png' alt='logo'/>
      <div className='header-info'>
        <h3> React sneakers</h3>
        <p>Магазин лучших кросовок</p>
      </div>
     
    </div>
     </Link>
    <ul className="header-right">
      <li onClick={onClickBasket}>
        <img src='./img/cart.png' className="icon18 btnImg" alt='Корзина'/>
        <span>1205 RUB</span> 
      </li>
      <li>
        <Link to='/favorites'>
        <img src='./img/unliked.png' className="icon18" alt='Закладки'/>
        </Link>
      </li>
      <li>
        <img src='./img/user.png' className="icon18" alt='Пользователь'/>
      </li>
      
    </ul>
  </header>
  )
}
