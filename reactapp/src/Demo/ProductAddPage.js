import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast'; 
import { DefaultSidebar } from './SideB';
import axios from 'axios';
function AddProductPage() {
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
    productCategory: '',
    imageURL: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/product/addProduct', formData)
      .then((response) => {
        console.log('Success:', response.data); 
        setFormData({
          productName: '',
          productDescription: '',
          productPrice: '',
          productCategory: '',
          imageURL: [],
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Description</label>
          <textarea
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Price</label>
          <input
            type="number"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Category</label>
          <input
            type="text"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default AddProductPage;
