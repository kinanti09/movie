import React from 'react';
import './searchButton.css';

const SearchButton = ({ onClick }) => (
    <div className="search-button">
        <button onClick={onClick}>Search</button>
    </div>
)

export default SearchButton;