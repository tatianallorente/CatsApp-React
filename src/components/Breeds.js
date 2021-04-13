import React, {useState, useEffect} from 'react';

import ReactPaginate from 'react-paginate';

import Breed from './Breed';
import Spinner from './spinner/Spinner';
import { getBreeds } from '../services/getBreeds';
import Error from './Error';


const Breeds = ({searchBreed}) => {

    const [loading, setLoading] = useState(false);

    const [breeds, setBreeds] = useState([]);

    // Buscador
    const [totalBreeds, setTotalBreeds] = useState([]);
 
    // Pagination
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const pageLimit = 9; // Mostrar 9 elementos en cada página
     

    // Buscador
    useEffect(() => { 
        setLoading(true); 
        getBreeds()
            .then(breeds => {
                setTotalBreeds(breeds) 
                setLoading(false)
            })
    }, [searchBreed]);


    // Pagination
    useEffect(() => {  
        setLoading(true);
        getBreeds(currentPage, pageLimit)
            .then(breeds => {
                const {paginationCount} = breeds;
                setBreeds(breeds)
                setTotalPages(Math.ceil(paginationCount / pageLimit))
                setLoading(false)
            })
    }, [currentPage]);


    const handlePagination = (e) => {
        setCurrentPage(e.selected);
    };

    // Case insensitive
    let searchResults = [];
    if (Object.keys(searchBreed).length > 0 && searchBreed.search_breed !== '') {
        searchResults = totalBreeds.filter(breed => breed.name.toLowerCase().includes(searchBreed.search_breed.toLowerCase()));
    }
               
    return (
        <> 
        {loading 
        ? <Spinner/> 
        : Object.keys(searchBreed).length > 0 && searchBreed.search_breed !== ''
            ? (
                searchResults.length > 0
                ? (
                    <div className="breeds-cards">
                        {searchResults.map(filteredBreed => (
                            <Breed key={filteredBreed.id} breed={filteredBreed} />
                        ))}
                    </div>
                )
                : <Error msg="No se encontraron resultados"/>
            )              
            : (
                <>
                <ReactPaginate
                    previousLabel="&lt;"
                    nextLabel="&gt;"
                    breakLabel={<span className="gap">...</span>}
                    pageCount={totalPages}
                    onPageChange={handlePagination}
                    forcePage={currentPage}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={2}
                    containerClassName={"pagination"}
                    pageClassName={"page-link"}
                    previousClassName={"page-link"}
                    previousLinkClassName={"page-item"}
                    nextClassName={"page-link"}
                    nextLinkClassName={"page-item"}
                    disabledClassName={"disabled"}
                    activeClassName={"page-item active"}
                    activeLinkClassName={"page-link"}
                />
                <div className="breeds-cards">
                    {breeds.map( breed => (
                        <Breed key={breed.id} breed={breed} />
                    ))}
                </div>
                <ReactPaginate
                    previousLabel="&lt;"
                    nextLabel="&gt;"
                    breakLabel={<span className="gap">...</span>}
                    pageCount={totalPages}
                    onPageChange={handlePagination}
                    forcePage={currentPage}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={2}
                    containerClassName={"pagination pagination-bottom"}
                    pageClassName={"page-link"}
                    previousClassName={"page-link"}
                    previousLinkClassName={"page-item"}
                    nextClassName={"page-link"}
                    nextLinkClassName={"page-item"}
                    disabledClassName={"disabled"}
                    activeClassName={"page-item active"}
                    activeLinkClassName={"page-link"}
                />
                </>
            )
        }
        </>
    )
    
}


export default Breeds;