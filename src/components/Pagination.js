import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ data, text }) {  
  const items = data;
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 3;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map(({ id, name, description, needs}) => (
      <div key={id} className='foundation'>
         <div className='left-column'>
             <span className='name'>{name}</span>
             <span className='target'>{description}</span>
         </div>  
             <span className='needs'>{needs}</span>
      </div>
    ));

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className='help'>
      <span className='description'>{text}</span>
      <div>
       {displayItems}
      </div>
      {pageCount > 1 && <ReactPaginate 
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination-buttons"}
        previousClassName={"previous-button"}
        nextClassName={"next-button"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"pagination-active"}
        />}
    </div>
  )
}