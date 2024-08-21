import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import { CircularProgress, Pagination } from '@mui/material';
import styled from '@emotion/styled';

const ANIME_API_ENDPOINT = process.env.REACT_APP_BACKEND_HOST + '/anime_title';

// Centering container using Flexbox
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

    const fetchAnimeTitles = async (pageNumber) => {
        setLoading(true);
        try {
            const response = await axios.get(ANIME_API_ENDPOINT, {
                params: {
                    page: pageNumber,
                    limit: 20,
                },
            });
            setAnimeTitles(response.data.items);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching anime titles:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchAnimeTitles(page);
    }, [page]);

    const handlePageChange = (event, value) => {
        setPage(value);
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredAnimeTitles = animeTitles.filter(anime =>
        anime.originalName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Pagination at the top */}
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

            {/* Loader while fetching data */}
            {loading ? (
                <LoaderContainer>
                    <CircularProgress />
                </LoaderContainer>
            ) : (
                <>
                    <AnimeList animeTitles={filteredAnimeTitles} />

                    {/* Pagination at the bottom */}
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
