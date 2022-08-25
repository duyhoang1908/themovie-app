import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';


const Pagination = ({totalPages, query}) => {
  const history = useNavigate()
  return (
    <ReactPaginate 
    breakLabel="..."
    nextLabel=">"
    pageRangeDisplayed={1}
    onPageChange={({selected}) => history(`/search/${query}/page=${selected+1}`)}
    pageCount={totalPages}
    previousLabel="<"
    renderOnZeroPageCount={null}
    activeClassName={"pagination-active"}
    containerClassName={"flex list-none pagination gap-3"}
    />
  )
}

export default Pagination