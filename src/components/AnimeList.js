import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import styled from '@emotion/styled';

// Размеры карточки
const CARD_WIDTH = '300px'; // Увеличено по ширине
const CARD_HEIGHT = '530px'; // Оставлено фиксированным

// Размеры изображения
const IMAGE_WIDTH = '300px'; // Увеличено по ширине
const IMAGE_HEIGHT = '400px'; // Увеличено по высоте

// Стилизация карточки
const StyledCard = styled(Card)`
    width: ${CARD_WIDTH};
    height: ${CARD_HEIGHT};
    display: flex;
    flex-direction: column;
    transition: transform 0.3s;
    overflow: hidden; /* Добавлено для предотвращения выхода содержимого за границы карточки */

    &:hover {
        transform: scale(1.05);
    }
`;

// Стилизация медиа-контента
const StyledCardMedia = styled(CardMedia)`
    width: ${IMAGE_WIDTH};
    height: ${IMAGE_HEIGHT};
`;

const AnimeList = ({ animeTitles }) => {
    return (
        <Grid container spacing={2}> {/* Уменьшено расстояние между карточками */}
            {animeTitles.map(anime => (
                <Grid item xs={12} sm={6} md={3} key={anime.id}>
                    <StyledCard>
                        <StyledCardMedia
                            component="img"
                            image={anime.largeImageUrl}
                            alt={anime.name}
                        />
                        <CardContent>
                            <Typography variant="h6" component="div" noWrap>
                                {anime.name}
                            </Typography>
                            <Typography variant="body2">
                                {anime.description ? anime.description.slice(0, 100) + '...' : 'No description available'}
                            </Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default AnimeList;
