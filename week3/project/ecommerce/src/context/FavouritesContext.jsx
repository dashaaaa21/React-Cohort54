import { useState, useEffect } from "react";
import { FavouritesContext } from "./favouritesContext";

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (productId) => {
    setFavourites((prev) => [...prev, productId]);
  };

  const removeFavourite = (productId) => {
    setFavourites((prev) => prev.filter((id) => id !== productId));
  };

  const toggleFavourite = (productId) => {
    if (favourites.includes(productId)) {
      removeFavourite(productId);
    } else {
      addFavourite(productId);
    }
  };

  const isFavourite = (productId) => {
    return favourites.includes(productId);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        toggleFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
