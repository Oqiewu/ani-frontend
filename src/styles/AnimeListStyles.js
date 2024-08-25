import styled from '@emotion/styled';
import { Card, CardMedia, CardContent } from '@mui/material';

export const StyledCard = styled(Card)`
    width: 100%;
    max-width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
    }
`;

export const StyledCardMedia = styled(CardMedia)`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

export const StyledCardContent = styled(CardContent)`
    padding: 16px;

    @media (max-width: 600px) {
        padding: 12px;
    }
`;
