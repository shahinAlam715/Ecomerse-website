import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './Components/Rootlayout'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Productdetials from './Pages/Productdetials'
import Cart from './Pages/Cart'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Checout from './Pages/Checout'
import Notfund from './Pages/Notfund'
import Completeorder from './Pages/Completeorder'
import Toptobotom from './Components/Toptobotom'
import Contact from './Pages/Contact'
import Singleblog from './Pages/Singleblog'



let router = createBrowserRouter(createRoutesFromElements(
<>
<Route element={<Rootlayout/>}>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/products' element={<Products/>}></Route>
  <Route path="/products/:id" element={<Productdetials/>}></Route>
  <Route path='/productdetials' element={<Productdetials/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/registration' element={<Registration/>}></Route>
  <Route path='/checout' element={<Checout/>}></Route>
  <Route path='/completeorder' element={<Completeorder/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/singleblog' element={<Singleblog/>}></Route>
</Route>
<Route path='/*' element={<Notfund/>}></Route>
</>

))

function App() {
  

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
   <Toptobotom/>
    </>
  )
}

export default App
