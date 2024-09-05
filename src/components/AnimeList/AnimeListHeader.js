import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import SearchBar from './SearchBar';
import { HeaderContainer, Title, SearchContainer, SortContainer } from '../../styles/AnimeListPageStyles';

const AnimeListHeader = ({ searchQuery, setSearchQuery, onSearch, sort, onSortChange }) => {
    return (
        <HeaderContainer>
            <Title onClick={() => onSearch('')}>
                Список аниме
            </Title>
            <SearchContainer>
                <SearchBar 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    onSearch={onSearch} 
                />
            </SearchContainer>
            <SortContainer>
                <FormControl style={{ width: '150px' }}>
                    <InputLabel>Sort by</InputLabel>
                    <Select
                        value={sort}
                        onChange={onSortChange}
                        label="Sort by"
                    >
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="rank">Popularity</MenuItem>
                    </Select>
                </FormControl>
            </SortContainer>
        </HeaderContainer>
    );
};

export default AnimeListHeader;
