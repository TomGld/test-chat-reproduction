import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ResultTemplate from '../../templates/analyse/ResultTemplate';
import { getProductById, getRecommendations } from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const catInfo = location.state?.catInfo;

  // Obtenir les données du produit
  const productData = id 
    ? getProductById(id)
    : catInfo 
      ? getRecommendations(catInfo.age, catInfo.sterilized)[0]
      : null;

  if (!productData) {
    return (
      <div className="container">
        <h1>Produit non trouvé</h1>
        <p>Désolé, nous n'avons pas trouvé le produit demandé.</p>
      </div>
    );
  }

  return <ResultTemplate productData={productData} />;
};

export default ProductDetail; 