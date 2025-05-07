import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg">{product.name}</h2>
            <p>${product.price}</p>
            <p className="text-sm text-gray-500">{product.description}</p>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mt-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
