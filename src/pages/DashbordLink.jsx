import React from 'react'
import Sidebar from '../component/Sidebar'
import Header from '../component/Header'
import Products from './Products'
import Dashbord from './Dashbord'
import Commande from './Commande'
import { Route, Routes } from 'react-router-dom'




const DashbordLink = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-4 bg-gray-100">
          <Routes>
          <Route path="/dashbord" element={<Dashbord />} />
          <Route  path="/products" element={<Products />}/>
          <Route path="/commande" element={<Commande />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default DashbordLink
