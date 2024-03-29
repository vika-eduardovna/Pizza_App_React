import React from 'react'
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss'

export default function Pagination({currentPage, onChangePage}) {
    return (
        <div>
            <ReactPaginate
                className={s.root}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                forcePage={currentPage - 1}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}
