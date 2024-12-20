import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  // Đọc dữ liệu từ localStorage khi component được mount
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Hàm xử lý xóa sản phẩm
  const handleDelete = (productId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      // Lọc ra các sản phẩm không bị xóa
      const updatedProducts = products.filter(product => product.id !== productId);
      
      // Cập nhật state
      setProducts(updatedProducts);
      
      // Cập nhật localStorage
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
  };

  // Lọc sản phẩm dựa trên từ khóa tìm kiếm
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Giá: {product.price.toLocaleString('vi-VN')} VNĐ</p>
            <p>Số lượng: {product.quantity}</p>
            <div className="product-actions">
              <Link 
                to={`/edit/${product.id}`} 
                className="edit-btn"
              >
                Sửa
              </Link>
              <button 
                className="delete-btn"
                onClick={() => handleDelete(product.id)}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
