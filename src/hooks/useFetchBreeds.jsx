import {useState, useEffect} from 'react';

import { getBreeds } from '../services'


export const useFetchBreeds = (currentPage, searchBreed) => {

  const initialState = {breeds: [], searchResults: [], totalPages: 1, loadingBreeds: true};

	const [state, setState] = useState(initialState);

  const pageLimit = 9; // Mostrar 9 elementos en cada página


  useEffect(() => {
    if (Object.keys(searchBreed)?.length > 0 && searchBreed?.search_breed !== '') {
      setState(initialState);

      getBreeds()
        .then(breeds => {
          // Case insensitive
          const results = breeds?.filter(breed =>
            breed.name.toLowerCase().includes(searchBreed.search_breed.toLowerCase())
          );

          setState({
            ...state,
            searchResults: results,
            loadingBreeds: false
          });
        })
    }
  }, [searchBreed]);

  useEffect(() => {
    setState(initialState);

    getBreeds(currentPage, pageLimit)
      .then(breeds => {
        const {paginationCount} = breeds;
        setState({
          ...state,
          breeds,
          totalPages: Math.ceil(paginationCount / pageLimit),
          loadingBreeds: false
        });
      })
  }, [currentPage]);

  return state;
}