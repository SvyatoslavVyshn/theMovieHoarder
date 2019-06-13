import React from 'react'
import ReactPaginate from 'react-paginate'
import PropTypes from 'prop-types'
import './pagination.scss'

const Pagination = (props) => {
    return (
        <ReactPaginate 
            pageCount={props.pageCount} 
            forcePage={props.forcePage}
            initialPage={props.initialPage}
            onPageChange={props.onPageChange}
            marginPagesDisplayed={props.marginPagesDisplayed}
            pageRangeDisplayed={props.pageRangeDisplayed}
            previousLabel={<i className="material-icons">chevron_left</i>} 
            nextLabel={<i className="material-icons">chevron_right</i>} 
            containerClassName="material-pagination offset-top"
            pageClassName="material-page-item"
            pageLinkClassName="material-page-link"
            activeClassName="material-active"
            disabledClassName="material-disabled"
            previousLinkClassName="material-page-link"
            nextClassName="material-page-item"
            nextLinkClassName="material-page-link"
            previousClassName="material-page-item"
            previousLinkClassName="material-page-link"
            breakClassName="material-page-item"
            breakLabel={<span className="material-page-link">...</span>}
        />
    )
}

Pagination.propTypes = {
    forcePage: PropTypes.number,
    onPageChange: PropTypes.func,
    pageCount: PropTypes.number,
    marginPagesDisplayed: PropTypes.number,
    pageRangeDisplayed: PropTypes.number
}

export default Pagination
