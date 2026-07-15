import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600"
      >
        Lenz
      </Link>

      {/* Liens */}
      <div className="flex gap-6">
        <Link to="/">Accueil</Link>
        <Link to="/login">Connexion</Link>
        <Link to="/register">Inscription</Link>
      </div>
    </nav>
  );
}

export default Navbar;