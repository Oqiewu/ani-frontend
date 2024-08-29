import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Container } from '@mui/material';
import styled from '@emotion/styled';
import logo from '../assets/img/logo_with_name_white.svg';

const StyledAppBar = styled(AppBar)`
    background-color: #333;
`;

const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin: 0 10px;

    &:hover {
        text-decoration: underline;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Header = () => {
    return (
        <StyledAppBar position="static">
            <Container>
                <StyledToolbar>
                    <LogoContainer>
                        <img src={logo} alt="Logo" width={90} height={90} />
                    </LogoContainer>
                    <NavContainer>
                        <StyledLink to="/">Главная</StyledLink>
                        <StyledLink to="/anime">Аниме</StyledLink>
                        <StyledLink to="/wiki">Википедия</StyledLink>
                        <StyledLink to="/profile">Профиль</StyledLink>
                    </NavContainer>
                </StyledToolbar>
            </Container>
        </StyledAppBar>
    );
};

export default Header;
