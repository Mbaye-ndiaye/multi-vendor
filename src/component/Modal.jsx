import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || { nom: "", quantite: "", stock: "En stock", image: null }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormData("")
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-xl font-semibold mb-4">
          {initialData ? "Modifier le Produit" : "Ajouter un Produit"}
        </h2>

        <input
          type="text"
          name="nom"
          placeholder="Nom du produit"
          value={formData.nom}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
        />

        <input
          type="number"
          name="quantite"
          placeholder="Quantité"
          value={formData.quantite}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
        />

        <select
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
        >
          <option value="En stock">En stock</option>
          <option value="Rupture">Rupture</option>
        </select>

        {/* Image en bas et occupe toute la largeur */}
        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="image-upload" />
        <label htmlFor="image-upload" className="cursor-pointer w-full">
          {formData.image ? (
            <img src={formData.image} alt="Preview" className="w-full h-40 object-cover rounded-lg mt-4" />
          ) : (
            <div className="w-full h-40 flex items-center justify-center border border-dashed border-gray-400 text-gray-600 rounded-lg mt-4">
               Ajouter une image
            </div>
          )}
        </label>

        <div className="flex justify-end mt-6 gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">
            Annuler
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md">
            {initialData ? "Modifier" : "Ajouter"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
