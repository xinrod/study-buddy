import React from 'react';
import './SearchBar.css'
const SearchBar = ({placeholder,handleChange}) =>{
    return(
        <input type='search'
        className='search'
        placeholder={placeholder}
        onChange = {handleChange}
        />
    )
}

export default SearchBar;