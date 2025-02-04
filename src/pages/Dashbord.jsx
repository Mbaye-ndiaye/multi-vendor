import React from 'react'
import Card from '../component/Card'
import { FaInfoCircle } from "react-icons/fa";


const Dashbord = () => {
  return (
    <div className='flex justify-between w-full'>
      <Card title="Commandes" value={10} icon={FaInfoCircle} />
      <Card title="Commandes" value={10} icon={FaInfoCircle} />
      <Card title="Commandes" value={10} icon={FaInfoCircle} />
      <Card title="Nombre produit disponible" value={10} icon={FaInfoCircle} />
    </div>
  )
}

export default Dashbord
