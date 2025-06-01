export const foodData = [
  {
    id: "rc-sterilised",
    brand: "Royal Canin",
    name: "Sterilised 37",
    type: "sterilised",
    age: "adult",
    image: "/test-chat-reproduction/images/foods/rc-sterilised.jpg",
    score: 7.8,
    searchTerms: ["royal canin", "sterilise", "sterilised", "37"],
    nutritionalInfo: {
      proteins: { value: "37%", rating: "satisfaisant" },
      rpc: { value: "98", rating: "satisfaisant" },
      glucides: { value: "28%", rating: "moyen" },
      rpp: { value: "38", rating: "satisfaisant" },
      mineraux: { value: "8.5%", rating: "moyen" },
      sansCereales: false
    },
    summary: "Les croquettes Royal Canin Sterilised 37 sont de qualité moyenne. Le taux de protéines est correct mais les glucides sont un peu élevés."
  },
  {
    id: "ziggy-sterilise-poulet",
    brand: "Ziggy",
    name: "Stérilisé Poulet",
    type: "sterilised",
    age: "adult",
    image: "2914.jpg",
    score: 8.1,
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
  {
    id: "carnilove-healthy-growth",
    brand: "Carnilove",
    name: "Healthy Growth saumon et dinde",
    type: "kitten",
    age: "kitten",
    image: "/test-chat-reproduction/images/foods/1614.jpg",
    score: 9.2,
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
  {
    id: "orijen-cat-kitten",
    brand: "Orijen",
    name: "Cat & Kitten",
    type: "all",
    age: "all",
    image: "/test-chat-reproduction/images/foods/orijen-cat-kitten.jpg",
    score: 9.5,
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
  {
    id: "hills-science-plan-sterilised",
    brand: "Hill's",
    name: "Science Plan Sterilised",
    type: "sterilised",
    age: "adult",
    image: "/test-chat-reproduction/images/foods/hills-sterilised.jpg",
    score: 7.5,
    searchTerms: ["hills", "hill's", "sterilise", "science plan"],
    nutritionalInfo: {
      proteins: { value: "35%", rating: "moyen" },
      rpc: { value: "95", rating: "satisfaisant" },
      glucides: { value: "30%", rating: "moyen" },
      rpp: { value: "35", rating: "satisfaisant" },
      mineraux: { value: "8%", rating: "satisfaisant" },
      sansCereales: false
    },
    summary: "Les croquettes Hill's Science Plan Sterilised sont de qualité moyenne. Le taux de protéines pourrait être plus élevé et les glucides sont un peu trop présents."
  }
];

// Informations pour les modales d'explication
export const modalInfo = {
  proteins: {
    title: "Protéines",
    content: "Le chat est un carnivore strict. Son organisme a donc essentiellement besoin de protéines animales de qualité pour se développer correctement et rester en bonne santé."
  },
  rpc: {
    title: "Ratio Protido-calorique",
    content: "Le rapport protido-calorique (RPC) évalue la concentration en protéines d'un aliment par rapport aux calories qu'il apporte. Un RPC élevé garantit à votre chat un apport élevé en protéines lors dans son repas."
  },
  glucides: {
    title: "Glucides",
    content: "Il est important de limiter au maximum les glucides dans l'alimentation des chats, car ils n'apportent pas de bénéfices nutritionnels significatifs et peuvent entraîner surpoids et obésité."
  },
  rpp: {
    title: "Ratio Protido-phosphorique",
    content: "Le rapport protido-phosphorique (RPP) évalue la qualité des protéines contenue dans les croquettes. Un RPP élevé est une garantie de la qualité des protéines présentes dans la croquette."
  },
  mineraux: {
    title: "Minéraux",
    content: "Les minéraux sont indispensables au bien-être des chats, contribuant à leur santé osseuse et à une fonction rénale optimale, toutefois, une attention particulière doit être portée pour ne pas excéder les limites recommandées afin de prévenir les troubles urinaires ou rénaux"
  },
  cereales: {
    title: "Céréales",
    content: "Les céréales sont souvent utilisées dans les croquettes pour leur coût réduit, mais elles peuvent causer des troubles digestifs chez les chats, rendant leur présence dans l'alimentation moins recommandable."
  }
};

// Fonctions utilitaires
export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return foodData.filter(product => {
    return product.searchTerms.some(term => term.toLowerCase().includes(searchTerm)) ||
           product.name.toLowerCase().includes(searchTerm) ||
           product.brand.toLowerCase().includes(searchTerm);
  });
};

export const getProductById = (id) => {
  return foodData.find(product => product.id === id);
};

export const getRecommendations = (age, sterilized) => {
  return foodData.filter(product => {
    if (age === "kitten") {
      return product.age === "kitten" || product.age === "all";
    }
    if (sterilized) {
      return product.type === "sterilised" || product.type === "all";
    }
    return product.age === "adult" || product.age === "all";
  });
}; 