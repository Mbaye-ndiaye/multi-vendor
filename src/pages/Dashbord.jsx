import React from 'react'
import Card from '../component/Card'
import { FaInfoCircle } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";


const Dashbord = () => {
  return (
    <div className='flex justify-between w-full'>
      <Card title="Commandes" value={10} icon={FaInfoCircle} />
      <Card title="Revenue" value={10} icon={FaMoneyCheckDollar} />
      <Card title="Commandes" value={10} icon={FaInfoCircle} />
      <Card title="Nombre produit disponible" value={10} icon={FaInfoCircle} />
    </div>
  )
}

export default Dashbord
