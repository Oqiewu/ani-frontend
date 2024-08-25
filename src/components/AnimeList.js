import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
    width: 100%;
    max-width: 300px; /* Максимальная ширина для больших экранов */
    height: auto;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
    }
`;

const StyledCardMedia = styled(CardMedia)`
    width: 100%;
    height: 400px;
    object-fit: cover;
`;

const StyledCardContent = styled(CardContent)`
    padding: 16px;

    @media (max-width: 600px) {
        padding: 12px;
    }
`;

const AnimeList = ({ animeTitles }) => {
    return (
        <Grid container spacing={2}>
            {animeTitles.map(anime => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={anime.id}>
                    <StyledCard>
                        <StyledCardMedia
                            component="img"
                            image={anime.largeImageUrl}
                            alt={anime.name}
                        />
                        <StyledCardContent>
                            <Typography variant="h6" component="div" noWrap>
                                {anime.name}
                            </Typography>
                            <Typography variant="body2">
                                {anime.description ? anime.description.slice(0, 100) + '...' : 'No description available'}
                            </Typography>
                        </StyledCardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default AnimeList;
