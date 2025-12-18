import categories from "../fake-data/all-categories";

function CategoryList({ selectedCategory, onCategoryChange }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Categories</h2>
      <div className="flex flex-wrap gap-2 justify-start">
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
            selectedCategory === "all"
              ? "bg-green-700 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-green-100"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-lg transition-all duration-300 capitalize font-medium ${
              selectedCategory === category
                ? "bg-green-700 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-green-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;