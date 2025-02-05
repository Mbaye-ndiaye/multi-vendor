import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../component/Button';
import logo from '../assets/logo.jpeg'; 

const Inscriptions = () => {
  return (
    <div 
      className="flex items-center justify-center h-screen bg-gray-100 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Overlay pour assombrir l'image */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg  ">
        <h1 className="text-2xl font-bold text-center mb-4">Page d'inscription</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Prenom"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none hover:bg-slate-200 focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="text"
            placeholder="Nom"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none hover:bg-slate-200 focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none hover:bg-slate-200 focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="phone"
            placeholder="Téléphone"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none hover:bg-slate-200 focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none hover:bg-slate-200 focus:ring-2 focus:ring-gray-400"
          />
          <Link to='/login'>
            <Button className="w-full bg-gray-400 py-3 rounded-lg hover:bg-blue-600" text="S'inscrire">
              S'inscrire
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Inscriptions;
