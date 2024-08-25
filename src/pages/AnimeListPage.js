import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';
import SearchBar from '../components/SearchBar';
import { CircularProgress, Pagination } from '@mui/material';
import styled from '@emotion/styled';
import { fetchAnimeTitles } from '../services/animeService';

const CenteredPaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 16px 0;
`;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px; /* Adjust height as needed */
`;

const AnimeListPage = () => {
    const [animeTitles, setAnimeTitles] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    const loadAnimeTitles = async (pageNumber) => {
        setLoading(true);
        try {
            const data = await fetchAnimeTitles(pageNumber);
            setAnimeTitles(data.items);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error fetching anime titles:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadAnimeTitles(page);
    }, [page]);

    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredAnimeTitles = animeTitles.filter(anime =>
        anime.originalName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

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
                    <AnimeList animeTitles={filteredAnimeTitles} />

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
        </div>
    );
};

export default AnimeListPage;
