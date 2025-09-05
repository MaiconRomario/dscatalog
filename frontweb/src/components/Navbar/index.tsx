import './style.css';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="nav-logo-text navbar-brand">
          <h4>DS Catalog</h4>
        </Link>

        {/* Botão hamburguer para mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li className="nav-item">
              <NavLink
                to="/"
                end // 🔹 garante que só "/" fique ativo, não "/products"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active fw-bold' : '')
                }
              >
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active fw-bold' : '')
                }
              >
                CATÁLOGO
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  'nav-link' + (isActive ? ' active fw-bold' : '')
                }
              >
                ADMIN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
