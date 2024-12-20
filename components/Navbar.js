import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="nav-link">Quản Lý Hàng Hóa</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Trang Chủ</Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">Thêm Sản Phẩm</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
