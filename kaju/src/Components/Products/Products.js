import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const productsPerPage = 8; // Number of products per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [minPrice, setMinPrice] = useState(""); // State to hold the minimum price
  const [maxPrice, setMaxPrice] = useState(""); // State to hold the maximum price
  const [selectedWilaya, setSelectedWilaya] = useState(""); // State to hold the selected wilaya
  const [selectedType, setSelectedType] = useState(""); // State to hold the selected type
  const [filterApplied, setFilterApplied] = useState(false); // State to track if filter is applied
  const products = [
    {
      id: 1,
      name: "Wonderful Chair",
      seller: "seller of Product 1",
      price: 5500,
      image: "product1.jpg",
      type: "home appliances",
      wilaya: "jijel",
    },
    {
      id: 2,
      name: "Magic Lamp",
      seller: "seller of Product 2",
      price: 34000,
      image: "product2.avif",
      type: "car parts",
      wilaya: "constantine",
    },
    {
      id: 3,
      name: "Gourmet Cookbook",
      seller: "seller of Product 3",
      price: 14500,
      image: "product3.webp",
      type: "phones",
      wilaya: "alger",
    },
    {
      id: 4,
      name: "Fitness Tracker",
      seller: "seller of Product 4",
      price: 52000,
      image: "product4.jpg",
      type: "electronics",
      wilaya: "oran",
    },
    {
      id: 5,
      name: "Stylish Sunglasses",
      seller: "seller of Product 5",
      price: 6200,
      image: "product5.jpg",
      wilaya: "constantine",
      type: "home appliances",
    },
    {
      id: 6,
      name: "Luxury Watch",
      seller: "seller of Product 6",
      price: 41000,
      image: "product6.jpg",
      wilaya: "jijel",
      type: "home appliances",
    },
    {
      id: 7,
      name: "Organic Soap",
      seller: "seller of Product 7",
      price: 19800,
      image: "product7.png",
      wilaya: "alger",
      type: "home appliances",
    },
    {
      id: 8,
      name: "Smartphone Holder",
      seller: "seller of Product 8",
      price: 14500,
      image: "product8.webp",
      wilaya: "jijel",
      type: "home appliances",
    },
    {
      id: 9,
      name: "Vintage Camera",
      seller: "seller of Product 9",
      price: 3800,
      image: "product1.jpg",
      wilaya: "jijel",
      type: "car parts",
    },
    {
      id: 10,
      name: "Gaming Mouse",
      seller: "seller of Product 10",
      price: 45000,
      image: "product1.jpg",
      wilaya: "alger",
      type: "car parts",
    },
    {
      id: 11,
      name: "Leather Wallet",
      seller: "seller of Product 11",
      price: 28000,
      image: "product1.jpg",
      wilaya: "constantine",
      type: "car parts",
    },
    {
      id: 12,
      name: "Decorative Pillow",
      seller: "seller of Product 12",
      price: 17000,
      image: "product1.jpg",
      wilaya: "jijel",
      type: "car parts",
    },
    {
      id: 13,
      name: "Coffee Maker",
      seller: "seller of Product 13",
      price: 2800,
      image: "product1.jpg",
      wilaya: "oran",
      type: "phones",
    },
    {
      id: 14,
      name: "Camping Tent",
      seller: "seller of Product 14",
      price: 9000,
      image: "product1.jpg",
      wilaya: "constantine",
      type: "phones",
    },
    {
      id: 15,
      name: "Yoga Mat",
      seller: "seller of Product 15",
      price: 32000,
      image: "product1.jpg",
      wilaya: "oran",
      type: "phones",
    },
    {
      id: 16,
      name: "Bluetooth Speaker",
      seller: "seller of Product 16",
      price: 10500,
      image: "product1.jpg",
      wilaya: "constantine",
      type: "phones",
    },
    {
      id: 17,
      name: "Wireless Earbuds",
      seller: "seller of Product 17",
      price: 6900,
      image: "product2.avif",
      wilaya: "alger",
      type: "electronics",
    },
    {
      id: 18,
      name: "Travel Backpack",
      seller: "seller of Product 18",
      price: 8500,
      image: "product2.avif",
      wilaya: "oran",
      type: "electronics",
    },
    {
      id: 19,
      name: "Portable Charger",
      seller: "seller of Product 19",
      price: 15000,
      image: "product2.avif",
      wilaya: "alger",
      type: "electronics",
    },
    {
      id: 20,
      name: "Designer Scarf",
      seller: "seller of Product 20",
      price: 1000,
      image: "product2.avif",
      wilaya: "jijel",
      type: "electronics",
    },
  ];



  // Calculate the index range of products to display for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, products.length);

  // Function to apply filters
  const applyFilters = () => {
    setFilterApplied(true);
    setCurrentPage(1); // Reset to first page when filter is applied
  };

  // Function to clear filters
  const clearFilters = () => {
    setSearchQuery("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedWilaya("");
    setSelectedType("");
    setFilterApplied(false);
    setCurrentPage(1); // Reset to first page when filters are cleared
  };

  // Filter products based on search query, price range, selected wilaya, and selected type
  const filteredProducts = products.filter(
    (product) =>
      (!filterApplied || // Apply filters only if filter is applied
        (product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (minPrice === "" || product.price >= parseFloat(minPrice)) &&
          (maxPrice === "" || product.price <= parseFloat(maxPrice)) &&
          (selectedWilaya === "" || product.wilaya === selectedWilaya) &&
          (selectedType === "" || product.type === selectedType)))
  );

  // Array of products to display for the current page
  const productsToShow = filteredProducts.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle minimum price change
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  // Function to handle maximum price change
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  // Function to handle wilaya change
  const handleWilayaChange = (event) => {
    setSelectedWilaya(event.target.value);
  };

  // Function to handle type change
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div>
      {/* Search filter input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="searchInput"
      />
      <div className="filters">
        {/* Price filter inputs */}
        <div className="priceFilter">
          <label>Price :</label>
          <label className="minmaxText">Min :</label>{" "}
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <label className="minmaxText">Max :</label>{" "}
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        {/* Wilaya filter select */}
        <div className="wilayaFilter">
          <label>Wilaya :</label>
          <select value={selectedWilaya} onChange={handleWilayaChange} className="selectWilaya">
            <option value="">All</option>
            <option value="jijel">Jijel</option>
            <option value="constantine">Constantine</option>
            <option value="alger">Alger</option>
            <option value="oran">Oran</option>
          </select>
        </div>
        {/* Type filter select */}
        <div className="typeFilter">
          <label>Type :</label>
          <select value={selectedType} onChange={handleTypeChange} className="selectType">
            <option value="">All</option>
            <option value="home appliances">Home Appliances</option>
            <option value="car parts">Car Parts</option>
            <option value="phones">Phones</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
      </div>
      {/* Filter button */}
      <button className="filterButton" onClick={applyFilters}>
        Filter
      </button>
      {/* Clear filters button */}
      <button className="clearFilterButton" onClick={clearFilters}>
        Clear Filters
      </button>
      <div className="productsContainer">
        {productsToShow.map((product) => (
          <div key={product.id} className="product">
            <img src={`../../../Images/${product.image}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="seller">{product.seller}</p>
            <p className="wilaya">{product.wilaya}</p>
            <p className="type">{product.type}</p>
            <p className="price">Price: ${product.price}</p>
          </div>
        ))}
      </div>
      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({
          length: Math.ceil(filteredProducts.length / productsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className="paginationButtons"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
