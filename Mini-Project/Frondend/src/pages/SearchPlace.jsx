import React, { useState } from 'react';
import axioaClient from '../axios-Client';
import './SearchPlace.css';

const SearchPlace = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            alert('Please enter a search query');
            return;
        }

        axioaClient.post('/search', { location: searchQuery })

            .then(response => {
                console.log('Search results:', response);
                // Handle the response data as needed
            })
            .catch(error => {
                console.error('Error during search:', error);
            });
    };

    return (
        <div>
            <h1>
                Search Your Destination
            </h1>
            <div className="textbox-container">
                <input
                    type="text"
                    className="large-textbox"
                    placeholder="Search the place"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button className="orange-button" onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default SearchPlace;
