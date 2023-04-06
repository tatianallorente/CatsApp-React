import {useState, useEffect} from 'react';

import { getBreeds } from '../services'


export const useFetchBreeds = (currentPage, searchBreed) => {

	const [state, setState] = useState({ breeds: [], totalPages: 1, loadingBreeds: true });

  const pageLimit = 9; // Mostrar 9 elementos en cada página


  useEffect(() => {
    getBreeds(currentPage, pageLimit)
      .then(breeds => {
        const {paginationCount} = breeds;
        setState({
          breeds: breeds,
          totalPages: Math.ceil(paginationCount / pageLimit),
          loadingBreeds: false
        });
      })
  }, [currentPage, searchBreed]);

  return state;
}