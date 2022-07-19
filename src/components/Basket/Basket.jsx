import React from 'react'

export default function Basket({obj, onCloseBusket, onRemove}) {
  return (
    <div className="overLay">
    <div className="drawer">
      <div className="blockTitle"><h3>Корзина </h3><button onClick={onCloseBusket} className="remove-btn">	&times;</button></div>
     
      
      {
        obj.length <= 0 &&
        <div className='empty'>
        <img src="./img/empty-cart.png" alt="empty" />
        <h2>Корзина пустая</h2>
        <p>Добавьте хотя пару кроссовок</p>
        <button onClick={onCloseBusket} className="greenBtn">Вернуться назад</button>
      </div>
      }
       {
       
       obj.length !== 0 && 
       <div className='item'>
      <div className="item">
      {
        obj.map((obj, index) =>
        <div className="cartObj" key={index}>
          <img className="img60" src={obj.photo} alt=''/>
          <div className="cartObjName">
             <p>{obj.title}</p>
             <b>{obj.price} RUB</b>
          </div>
          <button onClick={() => onRemove(obj.id)} className="remove-btn">	&times;</button>
        </div>
        )
      }
      </div> 
      <div className="cartTotalBlock">
      <ul className="totalCart">
        <li className="totalBlock">
          <span>Итог:</span> 
          <div></div>
          <b>21 999 RUB</b>
          </li>
          <li className="totalBlock">
          <span>Налог 5%:</span> 
          <div></div>
          <b>499 RUB</b>
          </li>
      </ul>
      <button className="greenBtn">Оформить заказ <span>&rarr;</span></button>
      </div>
      </div>
      }
    </div>
  </div>
  )
}
