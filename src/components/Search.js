import React from 'react';

import { useForm } from '../hooks/useForm';

const Search = ({setSearchBreed}) => {

    const [ formValues, handleFormChange ] = useForm('');

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchBreed(formValues);   
    };


    return (
        <div className="searchform">
            <h2>Buscador de razas de gatos</h2>
            <form onSubmit={handleSearchChange} className="searchform__form">
                <input 
                    autoComplete='off' 
                    id="search_breed"
                    name="search_breed"
                    color="secondary"
                    onChange={handleFormChange}
                    placeholder='Buscar raza...'
                />
                <button onClick={handleSearchChange}>Buscar</button>
            </form>
        </div>
    )   

}


export default Search;
