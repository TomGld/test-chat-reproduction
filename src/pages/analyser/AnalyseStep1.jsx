import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  color: #333;
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

const Description = styled.p`
  color: #666;
  margin-bottom: 30px;
  text-align: left;
`;

const QuestionLabel = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  text-align: left;
`;

const RadioToolbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  &.horizontal {
    flex-direction: row;
    gap: 20px;
  }
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 15px;
  border: 2px solid #25D366;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  ${props => props.selected && `
    background-color: #25D366;
    color: white;
  `}

  &:hover {
    background-color: #25D366;
    color: white;
  }
`;

const HiddenRadio = styled.input`
  display: none;
`;

const Button = styled.button`
  background-color: #25D366;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 40px;
  
  &:hover {
    background-color: #1fa355;
  }
`;

const AnalyseStep1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    neutering: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer les données
    console.log(formData);
    navigate('/analyse/step2');
  };

  return (
    <Container>
      <AnalyseBanner className="row d-none d-lg-flex" id="analyse-banner-container">
        <div className="offset-5 col-7 offset-lg-5 col-lg-6 pe-4 pe-lg-0 px-lg-5" id="analyse-banner-right">
          <div className="row">
            <div className="col-12">
              <Title>
                Évaluez la qualité de l'alimentation de <span className="white">votre chat</span>
              </Title>
            </div>
          </div>
        </div>
      </AnalyseBanner>

      <FormContainer className="row justify-content-center mt-5">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit}>
            <StepTitle>1. Décrivez-nous <GreenText>votre chat</GreenText></StepTitle>
            <Description>
              En fonction du profil de votre chat, nous allons étudier la qualité et
              la compatibilité de ses croquettes
            </Description>

            <div>
              <QuestionLabel>Son sexe</QuestionLabel>
              <RadioToolbar className="horizontal">
                <div>
                  <HiddenRadio
                    type="radio"
                    name="gender"
                    id="gender1"
                    value="male"
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                  />
                  <RadioLabel
                    htmlFor="gender1"
                    selected={formData.gender === 'male'}
                  >
                    C'est un mâle
                  </RadioLabel>
                </div>
                <div>
                  <HiddenRadio
                    type="radio"
                    name="gender"
                    id="gender2"
                    value="female"
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                  />
                  <RadioLabel
                    htmlFor="gender2"
                    selected={formData.gender === 'female'}
                  >
                    Une femelle
                  </RadioLabel>
                </div>
              </RadioToolbar>
            </div>

            {formData.gender && (
              <div>
                <QuestionLabel>Son âge</QuestionLabel>
                <RadioToolbar>
                  <div>
                    <HiddenRadio
                      type="radio"
                      name="age"
                      id="age1"
                      value="puppy"
                      onChange={(e) => handleInputChange('age', e.target.value)}
                    />
                    <RadioLabel
                      htmlFor="age1"
                      selected={formData.age === 'puppy'}
                    >
                      C'est un chaton (moins d'un an)
                    </RadioLabel>
                  </div>
                  <div>
                    <HiddenRadio
                      type="radio"
                      name="age"
                      id="age2"
                      value="adult"
                      onChange={(e) => handleInputChange('age', e.target.value)}
                    />
                    <RadioLabel
                      htmlFor="age2"
                      selected={formData.age === 'adult'}
                    >
                      Un chat adulte (1 à 7 ans)
                    </RadioLabel>
                  </div>
                  <div>
                    <HiddenRadio
                      type="radio"
                      name="age"
                      id="age3"
                      value="senior"
                      onChange={(e) => handleInputChange('age', e.target.value)}
                    />
                    <RadioLabel
                      htmlFor="age3"
                      selected={formData.age === 'senior'}
                    >
                      Un chat senior (8 ans et +)
                    </RadioLabel>
                  </div>
                </RadioToolbar>
              </div>
            )}

            {formData.age && (
              <div>
                <QuestionLabel>Est-il/elle stérilisé(e) ?</QuestionLabel>
                <RadioToolbar className="horizontal">
                  <div>
                    <HiddenRadio
                      type="radio"
                      name="neutering"
                      id="neutering1"
                      value="1"
                      onChange={(e) => handleInputChange('neutering', e.target.value)}
                    />
                    <RadioLabel
                      htmlFor="neutering1"
                      selected={formData.neutering === '1'}
                    >
                      Oui
                    </RadioLabel>
                  </div>
                  <div>
                    <HiddenRadio
                      type="radio"
                      name="neutering"
                      id="neutering2"
                      value="0"
                      onChange={(e) => handleInputChange('neutering', e.target.value)}
                    />
                    <RadioLabel
                      htmlFor="neutering2"
                      selected={formData.neutering === '0'}
                    >
                      Non
                    </RadioLabel>
                  </div>
                </RadioToolbar>

                {formData.neutering !== '' && (
                  <Button type="submit" className="btn-primary btn-lg">
                    Continuer
                  </Button>
                )}
              </div>
            )}
          </form>
        </div>
      </FormContainer>
    </Container>
  );
};

export default AnalyseStep1;