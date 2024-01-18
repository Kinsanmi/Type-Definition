import React, { useState } from 'react'

interface PaginationPage {
    totalPage: number;
}

export const Pagination:React.FC<PaginationPage> = ({totalPage}) => {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleNextPage = () =>{
        if(currentPage < totalPage){
            setCurrentPage((prev) => prev + 1);
        }
    }

    const handlePrevPage = () =>{
        if(currentPage > 1){
            setCurrentPage((prev) => prev - 1)
        }
    }

    const pages = (): JSX.Element =>{
        return (
            <>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
            <p>Current page: {currentPage}</p>
            <button onClick={handleNextPage} disabled={currentPage === totalPage}>Next</button>
            </>
        )
    }

  return (
    <>
    {pages()}
    </>
  )
}
