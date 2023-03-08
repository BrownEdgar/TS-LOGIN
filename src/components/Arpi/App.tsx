import React, { useEffect, useState } from 'react'
import { IProducrs } from './Interfaces'
import "./App.css"

import {  Routes, Route}  from 'react-router-dom';
import Products from './Products'
import Home from './Home';
import NavBar from './NavBar';

export default function App() {


  const [data, setData] = useState<IProducrs[]>()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              const data = json as IProducrs[]
              setData(data)
              localStorage.setItem("products", JSON.stringify(data))
            })
  }, [])
  
  return (
    <div className='container'>
      <NavBar />
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='products' element ={<Products/>}/>
    </Routes>
    </div>
    

  )
}
