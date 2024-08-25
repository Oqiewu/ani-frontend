import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';
import SearchBar from '../components/SearchBar';
import { CircularProgress, Pagination } from '@mui/material';
import { CenteredPaginationContainer, LoaderContainer, SearchContainer } from '../styles/AnimeListPageStyles';
import { fetchAnimeTitles } from '../services/animeService';
import ScrollToTopButton from '../components/ScrollToTopButton'; // Импорт компонента

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

    return (
        <div className="container mx-auto px-4">
            <SearchContainer>
                <SearchBar 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    onSearch={handleSearch} 
                />
            </SearchContainer>

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

            {loading ? (
                <LoaderContainer>
                    <CircularProgress />
                </LoaderContainer>
            ) : (
                <>
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
