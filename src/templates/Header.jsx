import React from 'react'
import styled from 'styled-components';
import { LOGO_URL } from '../constants/apiConstant';


const Header = () => {

    const Header = styled.header`
    text-align: center;
    margin-bottom: 40px;
    `;


    const Logo = styled.img`
    max-width: 200px;
    `;


  return (
    <Header>
    <a href="/">
    <Logo src={`${LOGO_URL}/logo.png`} alt="SantéChat.com" />
    </a>
  </Header>
  )
}

export default Header