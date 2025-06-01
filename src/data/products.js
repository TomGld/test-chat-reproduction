export const products = {
  // Croquettes pour chats adultes stérilisés
  "ziggy-sterilise-poulet": {
    id: "ziggy-sterilise-poulet",
    name: "Stérilisé Poulet",
    brand: "Ziggy",
    image: "2914.jpg",
    score: 8.1,
    type: "sterilised",
    age: "adult",
    searchTerms: ["ziggy", "sterilise", "poulet", "adulte"],
    nutritionalInfo: {
      proteins: { value: "38%", rating: "satisfaisant" },
      rpc: { value: "116", rating: "excellent" },
      glucides: { value: "25%", rating: "satisfaisant" },
      rpp: { value: "49", rating: "excellent" },
      mineraux: { value: "7%", rating: "excellent" },
      sansCereales: true
    },
    summary: "Les croquettes Ziggy - Stérilisé Poulet sont d'une qualité correcte. Vous pouvez peut-être améliorer l'alimentation de votre chat avec des prix plus intéressants grâce à nos suggestions ci-dessous"
  },

  "carnilove-healthy-growth": {
    id: "carnilove-healthy-growth",
    name: "Healthy Growth saumon et dinde",
    brand: "Carnilove",
    image: "/images/foods/1614.jpg",
    score: 9.2,
    type: "kitten",
    age: "kitten",
    searchTerms: ["carnilove", "chaton", "saumon", "dinde", "healthy growth"],
    nutritionalInfo: {
      proteins: { value: "40%", rating: "satisfaisant" },
      rpc: { value: "107", rating: "excellent" },
      glucides: { value: "20%", rating: "satisfaisant" },
      rpp: { value: "40", rating: "excellent" },
      mineraux: { value: "7%", rating: "excellent" },
      sansCereales: true
    },
    summary: "Les croquettes Carnilove - Healthy Growth saumon et dinde sont de très bonne qualité. Vous pouvez également trouver nos recommandations pour votre chat avec des prix parfois plus intéressants ci-dessous."
  },

  "orijen-cat-kitten": {
    id: "orijen-cat-kitten",
    name: "Cat & Kitten",
    brand: "Orijen",
    image: "/images/foods/orijen-cat-kitten.jpg",
    score: 9.5,
    type: "all",
    age: "all",
    searchTerms: ["orijen", "chat", "chaton", "cat", "kitten"],
    nutritionalInfo: {
      proteins: { value: "44%", rating: "excellent" },
      rpc: { value: "124", rating: "excellent" },
      glucides: { value: "19%", rating: "excellent" },
      rpp: { value: "52", rating: "excellent" },
      mineraux: { value: "6%", rating: "excellent" },
      sansCereales: true
    },
    summary: "Les croquettes Orijen Cat & Kitten sont d'excellente qualité, avec une très haute teneur en protéines et des ingrédients de première qualité."
  },

  "acana-first-feast": {
    id: "acana-first-feast",
    name: "First Feast Kitten",
    brand: "Acana",
    image: "/images/foods/acana-first-feast.jpg",
    score: 9.0,
    type: "kitten",
    age: "kitten",
    searchTerms: ["acana", "chaton", "first feast", "kitten"],
    nutritionalInfo: {
      proteins: { value: "42%", rating: "excellent" },
      rpc: { value: "115", rating: "excellent" },
      glucides: { value: "22%", rating: "satisfaisant" },
      rpp: { value: "45", rating: "excellent" },
      mineraux: { value: "7%", rating: "excellent" },
      sansCereales: true
    },
    summary: "Les croquettes Acana First Feast sont spécialement formulées pour les chatons, avec une excellente teneur en protéines et des ingrédients de qualité."
  }
};

// Fonction utilitaire pour rechercher des produits
export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return Object.values(products).filter(product => {
    return product.searchTerms.some(term => term.toLowerCase().includes(searchTerm)) ||
           product.name.toLowerCase().includes(searchTerm) ||
           product.brand.toLowerCase().includes(searchTerm);
  });
};

// Fonction pour obtenir des recommandations basées sur l'âge et le statut
export const getRecommendations = (age, sterilized) => {
  return Object.values(products).filter(product => {
    if (age === "kitten") {
      return product.age === "kitten" || product.age === "all";
    }
    if (sterilized) {
      return product.type === "sterilised" || product.type === "all";
    }
    return product.age === "adult" || product.age === "all";
  });
};

// Fonction pour obtenir un produit par son ID
export const getProductById = (id) => {
  return products[id];
};

// Fonction pour obtenir tous les produits
export const getAllProducts = () => {
  return Object.values(products);
}; 