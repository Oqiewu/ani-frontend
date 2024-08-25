import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ScrollToTopButtonContainer } from '../styles/ScrollToTopButtonStyles';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <ScrollToTopButtonContainer>
            {isVisible && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={scrollToTop}
                    startIcon={<ArrowUpwardIcon />}
                >
                    Top
                </Button>
            )}
        </ScrollToTopButtonContainer>
    );
};

export default ScrollToTopButton;
