import './Products.css';

const Products = () => {
    const products = [
      {
        id: 1,
        name: "Product 1",
        seller: "seller of Product 1",
        price: 19.99,
        image: "product1.jpg"
      },
      {
        id: 2,
        name: "Product 2",
        seller: "seller of Product 2",
        price: 29.99,
        image: "product2.avif"
      },
      {
        id: 3,
        name: "Product 3",
        seller: "seller of Product 3",
        price: 39.99,
        image: "product3.webp"
      },
      {
        id: 4,
        name: "Product 4",
        seller: "seller of Product 4",
        price: 39.99,
        image: "product4.jpg"
      },
      {
        id: 5,
        name: "Product 5",
        seller: "seller of Product 5",
        price: 39.99,
        image: "product5.jpg"
      },
      {
        id: 6,
        name: "Product 6",
        seller: "seller of Product 6",
        price: 39.99,
        image: "product6.jpg"
      },
      {
        id: 7,
        name: "Product 7",
        seller: "seller of Product 7",
        price: 39.99,
        image: "product7.png"
      },
      {
        id: 8,
        name: "Product 8",
        seller: "seller of Product 8",
        price: 39.99,
        image: "product8.webp"
      }
    ];

  return (
    <div>
      <div className="productsContainer">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={`../../../Images/${product.image}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p className='seller'>{product.seller}</p>
            <p className='price'>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
