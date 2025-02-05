import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import TableComponent from "../component/TableComponet";
import Modal from "../component/Modal";


const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, nom: "iPhone 14 Pro", quantite: 50, stock: "En stock", image: "/api/placeholder/100/100" },
    { id: 2, nom: "Samsung Galaxy S23", quantite: 0, stock: "Rupture", image: "/api/placeholder/100/100" },
    { id: 3, nom: "MacBook Pro M2", quantite: 15, stock: "En stock", image: "/api/placeholder/100/100" },
  ]);

  const getStockBadge = (quantite) => {
    if (quantite === 0) return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-500 text-white">Rupture</span>;
    if (quantite < 20) return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-500 text-black">Stock faible</span>;
    return <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-500 text-white">En stock</span>;
  };

  const columns = [
    { key: "image", label: "Image", render: (item) => <img src={item.image} alt={item.nom} className="w-12 h-12 rounded-lg object-cover" /> },
    { key: "nom", label: "Nom du produit" },
    { key: "quantite", label: "Quantité" },
    { key: "stock", label: "Stock", render: (item) => getStockBadge(item.quantite) },
  ];

  const actions = [
    { icon: <MdModeEdit className="h-4 w-4 text-blue-400" />, onClick: (item) => console.log("Edit:", item.id) },
    { icon: <FaRegTrashAlt className="h-4 w-4 text-red-400" />, onClick: (item) => console.log("Delete:", item.id) },
  ];

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
    setModalOpen(false); // Fermer la modal après ajout
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2>
          Nombre de produits <span>{products.length}</span>
        </h2>
        <button
          text="Ajouter un produit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={() => setModalOpen(true)}
        >Ajouter un produit</button>
      </div>

      <TableComponent columns={columns} data={products} actions={actions} />

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddProduct} />
    </div>
  );
};

export default Products;
