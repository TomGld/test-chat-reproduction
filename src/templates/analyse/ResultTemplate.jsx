import React from 'react';
import { modalInfo } from '../../data/products';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultTemplate = ({ productData }) => {
  const getBadgeClass = (rating) => {
    switch(rating.toLowerCase()) {
      case 'excellent': return 'badge-2';
      case 'satisfaisant': return 'badge-3';
      default: return '';
    }
  };

  const getScoreClass = (score) => {
    if (score >= 9) return 'note--9';
    if (score >= 8) return 'note--8';
    if (score >= 7) return 'note--7';
    return 'note--6';
  };

  return (
    <div className="body_wrap">
      <div className="container px-4" id="result">
        <div className="analyse-banner-container">
          <h1>Meilleures croquettes pour chat</h1>
          <p>
            Le bien-être et la santé des chats dépendent fortement de leur régime alimentaire. 
            Avec la multitude de produits sur le marché, il est important de se baser sur des critères 
            objectifs comme les rapports Protido-Calorique (RPC) et Protido-Phosphorique (RPP), ainsi 
            que d'autres composants essentiels, pour choisir des croquettes de qualité.
          </p>
          <p>
            Notre comparateur est un outil utile pour naviguer dans cette complexité et faire un choix éclairé. 
            Toutefois, à des fins de comparaison, il peut ne pas inclure certaines marques. Les notes des 
            croquettes sont basées sur les informations présentes sur le site internet des marques ou des 
            sites internet de leurs revendeurs.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1 className="d-inline-block mt-3">Résultat de l'analyse</h1>
          </div>
          <div className="ResultAnalyse">
            {productData.image && (
              <div className="image">
                <img src={productData.image} alt={`${productData.brand} ${productData.name}`} />
              </div>
            )}
            <div className="header">
              <h2>{productData.brand} - {productData.name}</h2>
              <div className="nutriscore">
                <div className="notation">
                  <p className={`note ${getScoreClass(productData.score)}`}>{productData.score}</p>
                  <p className="rank_sup">NOTE</p>
                </div>
              </div>
            </div>

            <div className="analyse">
              <p>Indicateurs nutritionnels</p>
              <table className="table nutrition-table">
                <tbody>
                  {Object.entries(productData.nutritionalInfo).map(([key, value]) => {
                    if (key === 'sansCereales') {
                      return (
                        <tr key={key}>
                          <td className="text-start">Sans Céréales</td>
                          <td className="text-end">
                            <div className="pe-2">
                              {value ? '✅' : '❌'}
                              <i className="info" data-bs-toggle="modal" data-bs-target="#cerealesModal" />
                            </div>
                          </td>
                        </tr>
                      );
                    }

                    return (
                      <tr key={key}>
                        <td className="text-start">
                          <span className="indicator-name">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                          <span className={`color-badge-${getBadgeClass(value.rating).split('-')[1]}`}>
                            <strong>{value.value}</strong>
                          </span>
                        </td>
                        <td className="text-end">
                          <div className="pe-2">
                            <span className={`badge rounded-pill ${getBadgeClass(value.rating)}`}>
                              {value.rating.charAt(0).toUpperCase() + value.rating.slice(1)}
                            </span>
                            <i className="info" data-bs-toggle="modal" data-bs-target={`#${key}Modal`} />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="summary">
              <h3>💡 En résumé</h3>
              <p>{productData.summary}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modales */}
      {Object.entries(modalInfo).map(([key, info]) => (
        <div key={key} className="modal" id={`${key}Modal`} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content position-relative">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div>
                <h2 className="text-center">{info.title}</h2>
              </div>
              <p className="text-center">{info.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultTemplate; 