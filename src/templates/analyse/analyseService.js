import { foodData } from './foodData';

export const analyseService = {
  getFoodRecommendation(catInfo) {
    const { gender, age, sterilized } = catInfo;
    
    // Convertir l'âge en mois pour faciliter la comparaison
    const ageInMonths = this.convertAgeToMonths(age);
    
    // Filtrer les croquettes en fonction des caractéristiques du chat
    const recommendedFood = Object.values(foodData).find(food => {
      // Pour les chatons (moins de 12 mois)
      if (ageInMonths < 12) {
        return food.type === 'kitten';
      }
      
      // Pour les chats stérilisés
      if (sterilized) {
        return food.type === 'sterilised';
      }
      
      // Pour les chats adultes non stérilisés
      return food.type === 'standard';
    });

    return recommendedFood || Object.values(foodData)[0]; // Retourne la première option si aucune correspondance
  },

  convertAgeToMonths(age) {
    if (typeof age === 'number') return age;
    
    const [value, unit] = age.split(' ');
    const numValue = parseInt(value);
    
    switch(unit.toLowerCase()) {
      case 'ans':
      case 'an':
        return numValue * 12;
      case 'mois':
        return numValue;
      case 'semaines':
        return Math.floor(numValue / 4);
      default:
        return 0;
    }
  },

  // Fonction pour obtenir une croquette spécifique par son ID
  getFoodById(id) {
    return Object.values(foodData).find(food => food.id === id);
  },

  // Fonction pour obtenir une croquette par son slug
  getFoodBySlug(slug) {
    return foodData[slug];
  }
};

export default analyseService; 