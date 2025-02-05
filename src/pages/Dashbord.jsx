import React from 'react'
import Card from '../component/Card'
import { FaInfoCircle } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";



const Dashbord = () => {
  return (
    <div className='flex justify-between space-y-4 flex-wrap w-full '>
      <Card title="Commandes" value={10} icon={FaInfoCircle} />
      <Card title="Revenue" value={10} icon={FaMoneyCheckDollar} />
      <Card title="Commandes" value={10} icon={FaInfoCircle} />
      <Card title="Nombre produit disponible" value={10} icon={FaInfoCircle} />
      <div>
        {/* <Chart /> */}
      </div>
    </div>
  )
}

export default Dashbord


