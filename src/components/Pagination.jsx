import ReactPaginate from 'react-paginate'


const Pagination = ({totalPages, handlePagination, currentPage, bottom=false}) => {


  return (
    <ReactPaginate
      previousLabel="&lt;"
      nextLabel="&gt;"
      breakLabel={<span className="gap">...</span>}
      pageCount={totalPages}
      onPageChange={handlePagination}
      forcePage={currentPage}
      marginPagesDisplayed={3}
      pageRangeDisplayed={2}
      containerClassName={`pagination${bottom ? ' pagination-bottom': ''}`}
      pageClassName={"page-link"}
      previousClassName={"page-link"}
      previousLinkClassName={"page-item"}
      nextClassName={"page-link"}
      nextLinkClassName={"page-item"}
      disabledClassName={"disabled"}
      activeClassName={"page-item active"}
      activeLinkClassName={"page-link"}
    />
  );
}

export default Pagination;
