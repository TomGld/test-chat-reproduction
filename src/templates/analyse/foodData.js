export const foodData = {
  "ziggy-sterilise-poulet": {
    id: 7,
    name: "Stérilisé Poulet",
    brand: "Ziggy",
    image: "2914.jpg",
    score: 8.1,
    type: "sterilised",
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
    id: 8,
    name: "Healthy Growth saumon et dinde",
    brand: "Carnilove",
    image: "1614.jpg",
    score: 9.2,
    type: "kitten",
    nutritionalInfo: {
      proteins: { value: "40%", rating: "satisfaisant" },
      rpc: { value: "107", rating: "excellent" },
      glucides: { value: "20%", rating: "satisfaisant" },
      rpp: { value: "40", rating: "excellent" },
      mineraux: { value: "7%", rating: "excellent" },
      sansCereales: true
    },
    summary: "Les croquettes Carnilove - Healthy Growth saumon et dinde sont de très bonne qualité. Vous pouvez également trouver nos recommandations pour votre chat avec des prix parfois plus intéressants ci-dessous."
  }
};

export const modalInfo = {
  protein: {
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
  },
  fat: {
    title: "Matières grasses",
    content: "Les matières grasses sont cruciales pour fournir de l'énergie et maintenir un pelage sain chez votre chat, faisant partie intégrante d'une alimentation équilibrée."
  }
}; 