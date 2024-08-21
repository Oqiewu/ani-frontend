import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)`
    background-color: #333;
`;

const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin: 0 10px;

    &:hover {
        text-decoration: underline;
    }
`;

function Header() {
    return (
        <StyledAppBar position="static">
            <Container>
                <StyledToolbar>
                    <Typography variant="h6">
                        Ani
                    </Typography>
                    <div>
                        <StyledLink to="/">Главная</StyledLink>
                        <StyledLink to="/anime">Аниме</StyledLink>
                        <StyledLink to="/wiki">Википедия</StyledLink>
                        <StyledLink to="/profile">Профиль</StyledLink>
                    </div>
                </StyledToolbar>
            </Container>
        </StyledAppBar>
    );
}

export default Header;
