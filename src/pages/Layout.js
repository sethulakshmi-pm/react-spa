import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-layout">
      <header className="app-header">
        <nav>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/blogs" className="nav-link">Blogs</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>&copy; 2025 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;