import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import TableComponent from '../component/TableComponet';


const Commande = () => {
  const products = [
    { id: 1, nom: "iPhone ", Nombre : 50, Statut: "En entent", image: "/api/placeholder/100/100" },
    { id: 2, nom: "Samsung Galaxy S23", Nombre: 0, Status: "Traite", image: "/api/placeholder/100/100" },
    { id: 3, nom: "MacBook Pro M2", Nombre: 15, Status: "En cours", image: "/api/placeholder/100/100" },
  ];

  const getStockBadge = (Nombre) => {
    if (Nombre === 0) return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white">Rupture</span>;
    if (Nombre < 20) return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500 text-black">Stock faible</span>;
    return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500 text-white">En stock</span>;
  };

  const columns = [
    { key: "image", label: "Image", render: (item) => <img src={item.image} alt={item.nom} className="w-12 h-12 rounded-lg object-cover" /> },
    { key: "nom", label: "Nom du produit" },
    { key: "Nombre", label: "Quantité" },
    { key: "stock", label: "Statut", render: (item) => getStockBadge(item.Nombre) },
  ];

  const actions = [
    { icon: <MdModeEdit className="h-4 w-4 text-blue-400" />, onClick: (item) => console.log("Edit:", item.id) },
    { icon: <FaRegTrashAlt className="h-4 w-4 text-red-400" />, onClick: (item) => console.log("Delete:", item.id) },
  ];

  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
        <h2>Nombre de commande <span>0</span></h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Ajouter un produit</button>
      </div>

    <TableComponent columns={columns} data={products} actions={actions} />
    </div>
  )
};

export default Commande;



