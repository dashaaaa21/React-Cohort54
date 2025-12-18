import categories from "./fake-data/all-categories";

function App() {
    return (
        <div>
            <h1>Ecommerce Shop</h1>

            <ul>
                {categories.map((category) => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
