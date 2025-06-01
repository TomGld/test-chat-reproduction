import React from 'react';
import styled from 'styled-components';
import { IMAGES_URL, LOGO_URL } from '../constants/apiConstant';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  max-width: 200px;
`;

const Section = styled.section`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Button = styled.button`
  background-color: #E01E5A;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #FF5252;
  }
`;

const GreenText = styled.span`
  color: #25D366 !important;
`;

const PartnerBanner = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;


const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <a href="/">
        <Logo src={`${LOGO_URL}/logo.png`} alt="SantéChat.com" />
        </a>
      </Header>

      <div className="row" id="home-banner-container">
        <div className="col-6" id="home-banner-left">
          <div className='max-w-[480px] h-[572px] rounded-3xl overflow-hidden'>
            <img 
              className='w-full h-full object-cover rounded-3xl' 
              src={`${IMAGES_URL}/illustration-home.jpg`} 
              alt="Gamelle de croquettes et patte de chat" 
            />
          </div>
        </div>
        <div className="offset-5 col-7 offset-lg-0 col-lg-6 pe-4 pe-lg-0 px-lg-5 text-start" id="home-banner-right">
          <div className="row">
            <div className="col-12">
              <h1 className="text-start">
                Évaluez la qualité de l'alimentation de{' '}
                <span className="green d-none d-lg-inline-block">
                  <GreenText>votre chat</GreenText>
                </span>
                <span className="white d-lg-none">votre chat</span>
              </h1>
            </div>
            <div className="col-12 mt-3">
              <Button onClick={() => navigate('/analyse')} className="btn btn-primary btn-lg">
                Commencer
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Section>
      <div className="row d-none d-lg-flex align-items-center my-5 pt-4 pb-0">
  <div className="col-lg-4 offset-lg-1 text-center">
    <img 
      src={`${IMAGES_URL}/illu-home-1.png`} 
      id="illu-home-1" 
      alt="Illustration page accueil 1"
      className="w-100 max-w-[195px]"
    />
  </div>
  <div className="col-lg-6 text-start">
    <h2>
      De meilleures croquettes pour chat,{' '}
      <span className="green">
        <GreenText>pourquoi ?</GreenText>
      </span>
    </h2>
    <p>
      Chez nos petits compagnons, une bonne santé est souvent synonyme de bonne alimentation.
    </p>
    <p className="mb-0">
      Notre outil analyse gratuitement la nourriture de votre chat en quelques clics et lui attribue une note sur 10 avec ses principales caractéristiques impactant la santé de votre chat.
    </p>
  </div>
</div>
      </Section>

      <PartnerBanner>
        <div className='row align-items-center mb-5'>
          <div className='col-12 flex'>
            <p className='text-mutted mb-1'>Offre partenaire</p>
          </div>
          <div className='col-12 d-none d-lg-block'>
            <a href="#">
              <img src={`${IMAGES_URL}/caats-desktop.png`} alt="Chat qui mange" />
            </a>
          </div>
        </div>
      </PartnerBanner>

      <Section>
        <div className='row d-none d-lg-flex align-items-center pt-4'>
          <div className='col-lg-8 text-start text-justify'>
            <h2>Une bonne nourriture pour chat, <GreenText>c'est quoi ?</GreenText></h2>
            <p>Le taux de protéines est particulièrement important. Ce taux est souvent méconnu, trop faible parmi les nourritures bas marché ce qui produit des carences alimentaires.</p>
            <p>L'alimentation et son dosage doit aussi être adaptée aux caractéristiques de votre chat : vérifiez du nom, âge, poids, allergies... tout très important pour définir précisément ce dont votre chat a besoin.</p>
            <Button onClick={() => navigate('/analyse')} className='btn btn-primary btn-lg mt-3'>Commencer</Button>
          </div>
          <div className='col-lg-4 d-flex justify-content-center align-items-center'>
            <img className='w-100 max-w-[160px]' src={`${IMAGES_URL}/illu-home-2.png`} alt="Qualité alimentaire" />
          </div>
        </div>
      </Section>

      <Section>
        <div className='d-flex justify-content-center align-items-center'>
          <img className='w-100 max-w-[96px]' src={`${IMAGES_URL}/illu-home-3.png`} alt="Goutte d'eau" />
        </div>
        <div className="text-start text-justify">
          <h2>L'hydratation du chat, un facteur <GreenText>souvent négligé</GreenText></h2>
          <p>Les chats boivent très peu et s'hydratent très mal. Une mauvaise hydratation aura un impact visible sur la santé de votre chat.</p>
          <p>L'alimentation est le meilleur moyen de garantir la bonne hydratation de votre chat. Un bon mix entre nourriture sèche et humide se révèle être le moyen idéal d'assurer son hydratation.</p>
        </div>
      </Section>

      <Section>
        <div className="text-start text-justify">
          <h2>Quelles marque de croquettes <GreenText>choisir ?</GreenText></h2>
          <p>Les marques de supermarché ou grand publiques contiennent souvent trop peu de protéines et ont des compositions de faible qualité.</p>
          <p>Pour les croquettes, nous conseillons d'opter pour des croquettes de "qualité vétérinaire" en portant attention au taux de protéines ainsi qu'à l'origine des aliments.</p>
          <Button onClick={() => navigate('/analyse')}>Commencer</Button>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <img className='w-100 max-w-[142px]' src={`${IMAGES_URL}/illu-home-4.png`} alt="Sac de croquettes" />
        </div>
      </Section>

      <Section>
        <div className='d-flex justify-content-center align-items-center'>
          <img className='w-100 max-w-[120px]' src={`${IMAGES_URL}/illu-home-5.png`} alt="Portion de nourriture" />
        </div>
        <div className="text-start text-justify">
          <h2>Quelle quantité de croquettes et pâtée <GreenText>donner à mon chat ?</GreenText></h2>
          <p>Le dosage de la nourriture est clé pour assurer le poids idéal de votre chat et sa bonne santé.</p>
          <p>Les besoins énergétiques de votre chat varient selon son âge, sa race et son activité. Il est donc très important de doser selon ces critères.</p>
        </div>
      </Section>

      <footer>
      <div className="container bg-black">
        <div className="row py-3">
            <div className="col-12 text-white">
                <div className="description">
                    <p>
                        Le bien-être et la santé des chats dépendent fortement de leur régime alimentaire. Avec la
                        multitude de produits sur le marché, il est important de se baser sur des critères objectifs
                        comme les rapports Protido-Calorique (RPC) et Protido-Phosphorique (RPP), ainsi que d'autres
                        composants essentiels pour choisir des croquettes de qualité. Notre comparateur est un outil
                        utile pour naviguer dans cette complexité et faire un choix éclairé. Toutefois, à des fins de
                        comparaison, il n'inclut pas toutes les marques. Les notes des produits sont basées sur la
                        méthodologie présentée sur notre page disclaimer et sur les informations présentes sur le site
                        internet des marques ou des sites internet de leurs revendeurs.
                    </p>
                </div>
                <p className="mb-2 text-center">
                    Copyrights © 2025
                </p>
                <p className="mb-2 text-center">
                    <a href="/">
                        sante-chat.com
                    </a>
                </p>
                <p className="mb-0 text-center">
                    <a href="https://sante-chat.com/mentions-legales">
                        Mentions légales
                    </a>
                </p>
                <p className="mb-0 text-center">
                    <a href="https://sante-chat.com/mentions-legales">
                        Conditions d'utilisation
                    </a>
                </p>
                <p className="mb-0 text-center">
                    <a href="https://sante-chat.com/mentions-legales">
                        Clause de non responsabilité
                    </a>
                </p>
            </div>
        </div>
    </div>
        
      </footer>

    </Container>
  );
};

export default Home;
