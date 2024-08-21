import React from 'react';
import { Container, Typography } from '@mui/material';
import styled from '@emotion/styled';

const FooterWrapper = styled('footer')`
    margin-top: 40px;  /* Добавляем отступ сверху */
    padding: 20px;
    background-color: #f1f1f1;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <Typography variant="body2" color="textSecondary">
                    &copy; 2024 Ani. Все права защищены.
                </Typography>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;
