import React from 'react'
import styled from 'styled-components';
import { LOGO_URL } from '../constants/apiConstant';
import { Link } from 'react-router-dom';

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
            <Link to="/">
                <Logo src={`${LOGO_URL}/logo.png`} alt="SantéChat.com" />
            </Link>
        </Header>
    )
}

export default Header