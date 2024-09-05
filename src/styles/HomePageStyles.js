import styled from '@emotion/styled';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

export const WelcomeMessage = styled.div`
    text-align: center;
    margin: 40px 0;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    color: #3b3b3b;
    margin-bottom: 16px;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: #1c90f3;
        transform: scale(1.05);
    }
`;

export const Description = styled.p`
    font-size: 1.2rem;
    color: #666;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    margin: 40px 0;
`;

export const Section = styled.section`
    margin-bottom: 40px;

    h2 {
        font-size: 1.8rem;
        font-weight: 500;
        color: #3b3b3b;
        margin-bottom: 20px;
    }
`;
