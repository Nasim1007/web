import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from 'react-router-dom'
import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import Home from './pages/Home'
import Favorites from './pages/Favorites'


function App() {
  const [objs, setObjs] = useState([])
  const [basketOpened, setBusketOpened] = useState(false)
  const [objCart, setObjCart] = useState([])
  const [favorites, setFavorites] = useState([])
  

  useEffect(() => {
  //   fetch('https://62a23d9dcd2e8da9b0053140.mockapi.io/items').then(res =>{
  //   return res.json();
  // }).then((json) =>{
  //   setObjs(json)
  // })
  axios.get('https://62a23d9dcd2e8da9b0053140.mockapi.io/items')
  .then((res) =>{
    setObjs(res.data)
  });
  axios.get('https://62a23d9dcd2e8da9b0053140.mockapi.io/busket')
  .then((res) =>{
    setObjCart(res.data)
  })
  axios.get('https://62a23d9dcd2e8da9b0053140.mockapi.io/favorites')
  .then((res) => {
    setFavorites(res.data)
  })
  }, [])
  
  
  const addToCart = (addedObj) =>{
    axios.post('https://62a23d9dcd2e8da9b0053140.mockapi.io/busket', addedObj)
    setObjCart((prev) => [...prev, addedObj])
  }
  const addToFavorites = async (favObj) =>{
   try {
    if (favorites.find((obj) => obj.id === favObj.id)){
      axios.delete(`https://62a23d9dcd2e8da9b0053140.mockapi.io/favorites/${favObj.id}`);
      // setFavorites((prev) => prev.filter((item) => item.id !== favObj.id));
    } else {
      const { data } = await axios.post('https://62a23d9dcd2e8da9b0053140.mockapi.io/favorites', favObj)
      setFavorites((prev) => [...prev, data])
    }
   } catch (error) {
    alert('Не удалось добавить в фаворите')
   }
  }
  const onRemoveItem = (id) => {
    console.log(id)
    axios.delete(`https://62a23d9dcd2e8da9b0053140.mockapi.io/busket/${id}`)
    setObjCart((prev) => prev.filter(item => item.id !== id))
  }
  const onDltFavor = (id) => {
    axios.delete(`https://62a23d9dcd2e8da9b0053140.mockapi.io/favorites/${id}`)
    setFavorites((prev) => prev.filter(item => item.id !== id))
  }
 
  useEffect(()=>{
     console.log(objCart)
  },[objCart])
  
 
  return (
    <div className="wrapper">
  { basketOpened && <Basket obj={objCart} onCloseBusket={()=>setBusketOpened(false)} onRemove={onRemoveItem}/>}
     <Header onClickBasket={() => setBusketOpened(!basketOpened)}/>
     <Routes>
     <Route path='/' element={
      <Home addToFavorites={addToFavorites} objs={objs} addToCart={addToCart}/>
     }/>
      <Route path='/favorites' element={
      <Favorites 
          favorites={favorites} 
          onRemove={onDltFavor} 
          addToFavorites={addToFavorites} 
          addToCart={addToCart}/> 
      }/>
      </Routes>
      
    </div>
  );
}

export default App;
