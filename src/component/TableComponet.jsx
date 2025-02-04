import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

const TableComponet = ({data}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Image</th>
            <th className="px-4 py-2 text-left">Nom du Produit</th>
            <th className="px-4 py-2 text-left">Prix</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
            
          
        </tbody>
      </table>
    </div>
  );
}

export default TableComponet
