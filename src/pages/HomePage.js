import React from 'react';
import { Helmet } from 'react-helmet';
import { Title, Description, Divider, Container, WelcomeMessage, Section } from '../styles/HomePageStyles';
import ScrollToTopButton from '../components/ScrollToTopButton';

const HomePage = () => {
    return (
        <Container>
            <Helmet>
                <title>Добро пожаловать на Ani</title>
            </Helmet>

            <WelcomeMessage>
                <Title>Добро пожаловать на Ani</Title>
                <Description>
                    Откройте для себя невероятный мир аниме! Здесь вы можете найти свои любимые аниме-сериалы и фильмы, ознакомиться с рейтингами и отзывами, а также создавать собственные списки для просмотра. Присоединяйтесь к нашему сообществу и делитесь своими впечатлениями с другими фанатами аниме.
                </Description>
            </WelcomeMessage>

            <Divider />

            <Section>
                <h2>Популярные аниме</h2>
            </Section>

            <Section>
                <h2>Последние обновления</h2>
            </Section>

            <ScrollToTopButton />
        </Container>
    );
};

export default HomePage;
