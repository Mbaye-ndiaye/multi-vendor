const Inscriptions = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Page d'inscription</h1>
        <form className="bg-white p-6 rounded-lg shadow-md w-96">
          <input
            type="text"
            placeholder="Nom"
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full mb-3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            S'inscrire
          </button>
        </form>
      </div>
    );
  };
  
  export default Inscriptions;
  
