import React from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch();
    };

    return (
        <div style={{ display: 'flex', gap: '10px'}}>
            <TextField
                fullWidth
                label="Search"
                variant="outlined"
                value={searchQuery}
                onChange={handleInputChange}
            />
            <Button variant="contained" color="primary" onClick={handleSearchClick}>
                Search
            </Button>
        </div>
    );
};

export default SearchBar;
