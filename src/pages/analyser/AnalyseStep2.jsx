import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchProducts } from '../../data/products';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const AnalyseBanner = styled.div`
  display: none;
  border-radius: 5px;
  padding: 30px 20px;
  color: white;
  margin-top: 30px;
  background-color: #23d366;
  @media (min-width: 992px) {
    display: flex;
  }
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  margin-bottom: 250px;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 30px;
  text-align: left;
`;

const StepTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  text-align: left;
`;

const GreenText = styled.span`
  color: #25D366;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 8px;
  &:focus {
    outline: none;
    border-color: #25D366;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: 0;
  }
`;

const InputAddon = styled.span`
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-left: none;
  padding: 10px 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const SmallLink = styled.a`
  color: #666;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  display: block;
  text-align: center;
  margin: 20px 0;
  &:hover {
    color: #25D366;
  }
`;

const Button = styled.button`
  background-color: #25D366;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  
  &:hover {
    background-color: ${props => props.disabled ? '#25D366' : '#1fa355'};
  }
`;

const FieldLabel = styled.span`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const OptionalText = styled.small`
  color: #666;
  font-size: 12px;
`;

const SearchResults = styled.div`
  position: absolute;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: -8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
`;

const SearchResultItem = styled.div`
  padding: 12px 15px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const NoResults = styled.div`
  padding: 12px 15px;
  color: #666;
  text-align: center;
  font-style: italic;
`;

const ProductName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #333;
`;

const ProductBrand = styled.span`
  color: #666;
  margin-right: 4px;
`;

const ProductType = styled.span`
  background-color: #25D366;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  margin-left: 8px;
`;

const AnalyseStep2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const catInfo = location.state?.catInfo;

  const [mode, setMode] = useState('auto');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [manualData, setManualData] = useState({
    protein: '',
    fat: '',
    cellulose: '',
    mineraux: '',
    humidity: '',
    glucides: ''
  });

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const results = searchProducts(searchTerm);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchTerm]);

  const handleProductSelect = (product) => {
    setSearchTerm(`${product.brand} - ${product.name}`);
    setSelectedProduct(product);
    setShowResults(false);
    navigate(`/analyse/result/${product.id}`, {
      state: { catInfo }
    });
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    setSearchTerm('');
    setSelectedProduct(null);
    setSearchResults([]);
    setShowResults(false);
  };

  const handleManualInputChange = (field, value) => {
    setManualData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'manual') {
      // Traitement des données manuelles
      navigate('/analyse/result/manual', {
        state: { 
          catInfo,
          manualData
        }
      });
    }
  };

  return (
    <Container>
      <AnalyseBanner className="row d-none d-lg-flex" id="analyse-banner-container">
        <div className="offset-5 col-7 offset-lg-5 col-lg-6 pe-4 pe-lg-0 px-lg-5">
          <div className="row">
            <div className="col-12">
              <Title>
                Évaluez la qualité de l'alimentation de <span>votre chat</span>
              </Title>
            </div>
          </div>
        </div>
      </AnalyseBanner>

      <FormContainer className="row justify-content-center mt-5">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit}>
            <div className="col-12 mb-3">
              <StepTitle>2. Quelles sont <GreenText>ses croquettes ?</GreenText></StepTitle>
            </div>

            {mode === 'auto' && (
              <div id="container_product_name">
                <Label htmlFor="product_name">
                  Tapez le nom de la marque actuelle
                </Label>
                <SearchContainer>
                  <Input
                    type="text"
                    required
                    id="product_name"
                    name="product_name"
                    placeholder="Commencez à écrire..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoComplete="off"
                    onFocus={() => searchTerm.length >= 2 && setShowResults(true)}
                  />
                  {showResults && (
                    <SearchResults>
                      {searchResults.length > 0 ? (
                        searchResults.map(product => (
                          <SearchResultItem
                            key={product.id}
                            onClick={() => handleProductSelect(product)}
                          >
                            <ProductName>
                              <ProductBrand>{product.brand} - </ProductBrand>
                              {product.name}
                              {product.type === 'sterilised' && (
                                <ProductType>Stérilisé</ProductType>
                              )}
                            </ProductName>
                          </SearchResultItem>
                        ))
                      ) : (
                        <NoResults>Aucun résultat trouvé</NoResults>
                      )}
                    </SearchResults>
                  )}
                </SearchContainer>
                <SmallLink onClick={() => handleModeSwitch('manual')}>
                  Je ne connais pas le nom ou ce n'est pas dans la liste
                </SmallLink>
                <Button type="button" disabled={!selectedProduct}>
                  Continuer
                </Button>
              </div>
            )}

            {mode === 'manual' && (
              <div id="container_product_manual">
                <Label>Entrez les informations nutritionnelles :</Label>

                <div>
                  <FieldLabel>Taux de protéine :</FieldLabel>
                  <InputGroup>
                    <Input
                      required
                      type="number"
                      id="protein"
                      name="protein"
                      placeholder="30"
                      value={manualData.protein}
                      onChange={(e) => handleManualInputChange('protein', e.target.value)}
                    />
                    <InputAddon>%</InputAddon>
                  </InputGroup>

                  <FieldLabel>Taux de graisses :</FieldLabel>
                  <InputGroup>
                    <Input
                      required
                      type="number"
                      id="fat"
                      name="fat"
                      placeholder="15"
                      value={manualData.fat}
                      onChange={(e) => handleManualInputChange('fat', e.target.value)}
                    />
                    <InputAddon>%</InputAddon>
                  </InputGroup>

                  <FieldLabel>Taux de fibres / cellulose :</FieldLabel>
                  <InputGroup>
                    <Input
                      required
                      type="number"
                      id="cellulose"
                      name="cellulose"
                      placeholder="2"
                      value={manualData.cellulose}
                      onChange={(e) => handleManualInputChange('cellulose', e.target.value)}
                    />
                    <InputAddon>%</InputAddon>
                  </InputGroup>

                  <FieldLabel>Taux de cendres / minéraux :</FieldLabel>
                  <InputGroup>
                    <Input
                      required
                      type="number"
                      id="mineraux"
                      name="mineraux"
                      placeholder="10"
                      value={manualData.mineraux}
                      onChange={(e) => handleManualInputChange('mineraux', e.target.value)}
                    />
                    <InputAddon>%</InputAddon>
                  </InputGroup>

                  <FieldLabel>
                    Taux d'humidité <OptionalText>(facultatif)</OptionalText> :
                  </FieldLabel>
                  <InputGroup>
                    <Input
                      type="number"
                      id="humidity"
                      name="humidity"
                      placeholder="10"
                      value={manualData.humidity}
                      onChange={(e) => handleManualInputChange('humidity', e.target.value)}
                    />
                    <InputAddon>%</InputAddon>
                  </InputGroup>

                  <FieldLabel>
                    Taux de glucides / ENA <OptionalText>(facultatif)</OptionalText> :
                  </FieldLabel>
                  <InputGroup>
                    <Input
                      type="number"
                      id="glucides"
                      name="glucides"
                      placeholder="35"
                      value={manualData.glucides}
                      onChange={(e) => handleManualInputChange('glucides', e.target.value)}
                    />
                    <InputAddon>%</InputAddon>
                  </InputGroup>

                  <SmallLink onClick={() => handleModeSwitch('auto')}>
                    Je préfère utiliser la marque
                  </SmallLink>

                  <Button type="submit">Continuer</Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </FormContainer>
    </Container>
  );
};

export default AnalyseStep2;