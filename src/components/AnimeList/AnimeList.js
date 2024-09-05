import React from 'react';
import { Grid, Typography } from '@mui/material';
import { StyledCard, StyledCardMedia, StyledCardContent } from '../../styles/AnimeListStyles';

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
