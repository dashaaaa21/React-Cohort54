import categories from "./fake-data/all-categories";
import products from "./fake-data/all-products";

function App() {
    return (
        <div>
            <h1>Ecommerce Shop</h1>

            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>

            <hr />

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>€ {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
