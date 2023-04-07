import {useState, useEffect} from 'react'

import Breed from './Breed'
import Spinner from './spinner/Spinner'
import Error from './Error'
import Pagination from './Pagination'
import { useFetchBreeds } from '../hooks/useFetchBreeds'

const Breeds = ({searchBreed}) => {

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);

  // Get breeds
  const { breeds, searchResults, totalPages, loadingBreeds:loading } = useFetchBreeds(currentPage, searchBreed);


  const handlePagination = (e) => {
    setCurrentPage(e.selected);
  };


  return (
    <>
      {loading
        ? <Spinner/>
        : Object.keys(searchBreed)?.length > 0 && searchBreed?.search_breed !== ''
          ? searchResults.length > 0
            ? <div className="breeds-cards">
                {searchResults.map(filteredBreed => (
                  <Breed key={filteredBreed.id} breed={filteredBreed} />
                ))}
              </div>
            : <Error msg="No se encontraron resultados"/>
          : <>
              <Pagination
                totalPages={totalPages}
                handlePagination={handlePagination}
                currentPage={currentPage}
              />
              <div className="breeds-cards">
                {breeds.map( breed => (
                  <Breed key={breed.id} breed={breed} />
                ))}
              </div>
              <Pagination
                totalPages={totalPages}
                handlePagination={handlePagination}
                currentPage={currentPage}
                bottom={true}
              />
            </>
      }
    </>
  )
}

export default Breeds;

/*
      {loading
        ? <Spinner/>
        : Object.keys(searchBreed)?.length > 0 && searchBreed?.search_breed !== ''
          ? searchResults.length > 0
            ? <div className="breeds-cards">
                {searchResults.map(filteredBreed => (
                  <Breed key={filteredBreed.id} breed={filteredBreed} />
                ))}
              </div>
            : <Error msg="No se encontraron resultados"/>
          : <>
              <Pagination
                totalPages={totalPages}
                handlePagination={handlePagination}
                currentPage={currentPage}
              />
              <div className="breeds-cards">
                {breeds.map( breed => (
                  <Breed key={breed.id} breed={breed} />
                ))}
              </div>
              <Pagination
                totalPages={totalPages}
                handlePagination={handlePagination}
                currentPage={currentPage}
                bottom={true}
              />
            </>
      }
*/