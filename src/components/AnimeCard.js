import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const AnimeCard = ({ anime }) => {
    return (
        <MotionCard
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            sx={{ maxWidth: 345, margin: '0 auto' }}
        >
            <CardMedia
                component="img"
                height="140"
                image={anime.images.jpg.large_image_url}
                alt={anime.title}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {anime.title}
                </Typography>
            </CardContent>
        </MotionCard>
    );
};

export default AnimeCard;
