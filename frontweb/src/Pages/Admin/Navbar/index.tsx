import './style.css';

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <a className="admin-nav-item active" href="">
            <p>Produtos</p>
          </a>
        </li>
        <li>
          <a className="admin-nav-item" href="">
            <p>Categorias</p>
          </a>
        </li>
        <li>
          <a className="admin-nav-item" href="">
            <p>Usuários</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
