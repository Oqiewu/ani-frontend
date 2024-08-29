import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AnimeList from '../components/AnimeList';
import SearchBar from '../components/SearchBar';
import { CircularProgress, Pagination } from '@mui/material';
import { CenteredPaginationContainer, LoaderContainer, SearchContainer, Title, HeaderContainer, Divider, Description } from '../styles/AnimeListPageStyles';
import { fetchAnimeTitles } from '../services/animeService';
import ScrollToTopButton from '../components/ScrollToTopButton';

const AnimeListPage = () => {
    const [animeTitles, setAnimeTitles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    const loadAnimeTitles = async (pageNumber, searchTerm) => {
        setLoading(true);
        try {
            const data = await fetchAnimeTitles(pageNumber, 20, searchTerm);
            setAnimeTitles(data.items);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching anime titles:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadAnimeTitles(page, searchTerm);
    }, [page, searchTerm]);

    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearch = () => {
        setPage(1);
        setSearchTerm(searchQuery);
    };

    const handleReset = () => {
        setSearchQuery('');
        setSearchTerm('');
        setPage(1);
    };

    const pageTitle = searchTerm ? `Поиск по запросу ${searchTerm}` : `Список аниме`;

    return (
        <div className="container mx-auto px-4">
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            
            <HeaderContainer>
                <Title onClick={handleReset}>
                    Список аниме
                </Title>
                <SearchContainer>
                    <SearchBar 
                        searchQuery={searchQuery} 
                        setSearchQuery={setSearchQuery} 
                        onSearch={handleSearch} 
                    />
                </SearchContainer>
            </HeaderContainer>

            <Description>
            Здесь вы найдете обширную базу данных, включающую сотни аниме-сериалов и фильмов на любой вкус. Удобная навигация и система фильтров позволят быстро найти интересующее вас аниме по жанру, году выпуска, популярности и рейтингу. Каждое аниме сопровождается подробной карточкой с информацией о сюжете, жанрах, рейтинге и отзывами зрителей. Также вы можете посмотреть трейлеры и найти рекомендации на основе ваших предпочтений. Добавьте аниме в избранное, чтобы не потерять его из виду, или создайте свой личный список для просмотра. Зарегистрированные пользователи могут оставлять комментарии и делиться своими мнениями с другими участниками сообщества. Погружайтесь в мир аниме вместе с нами и открывайте для себя новые захватывающие истории!
            </Description>
            
            <Divider />

            {loading ? (
                <LoaderContainer>
                    <CircularProgress />
                </LoaderContainer>
            ) : (
                <>
                    <CenteredPaginationContainer>
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handlePageChange}
                            color="primary"
                            siblingCount={1}
                            boundaryCount={1}
                        />
                    </CenteredPaginationContainer>
                    
                    <AnimeList animeTitles={animeTitles} />

                    <CenteredPaginationContainer>
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handlePageChange}
                            color="primary"
                            siblingCount={1}
                            boundaryCount={1}
                        />
                    </CenteredPaginationContainer>
                </>
            )}

            <ScrollToTopButton />
        </div>
    );
};

export default AnimeListPage;
