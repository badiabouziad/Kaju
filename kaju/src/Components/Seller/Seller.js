import React, { useState } from "react";
import './Seller.css';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [seller, setSeller] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [type, setType] = useState("");
  const [wilaya, setWilaya] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSellerChange = (event) => {
    setSeller(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImagesChange = (event) => {
    const fileList = Array.from(event.target.files);
    setImages(fileList);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleWilayaChange = (event) => {
    setWilaya(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the new product object
    const newProduct = {
      id: Math.floor(Math.random() * 10000) + 1, // Generate a random ID (you may need to adjust this)
      name,
      seller,
      price: parseFloat(price),
      images: images.map(image => URL.createObjectURL(image)),
      type,
      wilaya,
    };

    // Pass the new product to the parent component
    onAddProduct(newProduct);

    // Reset the form fields
    setName("");
    setSeller("");
    setPrice("");
    setImages([]);
    setType("");
    setWilaya("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Seller:
        <input type="text" value={seller} onChange={handleSellerChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={price} onChange={handlePriceChange} />
      </label>
      <br />
      <label>
        Images:
        <input type="file" multiple onChange={handleImagesChange} />
      </label>
      <br />
      <label>
        Type:
        <input type="text" value={type} onChange={handleTypeChange} />
      </label>
      <br />
      <label>
        Wilaya:
        <input type="text" value={wilaya} onChange={handleWilayaChange} />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
