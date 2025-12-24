import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        <div className="h-48 bg-gray-200 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 flex-grow">
            {product.title}
          </h3>
          <div className="flex items-center justify-between mt-auto">
            <p className="text-2xl font-bold text-green-700">€{product.price}</p>
            <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
