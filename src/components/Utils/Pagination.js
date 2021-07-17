import React, { Component } from 'react';

import './Pagination.css'

class Pagination extends Component {
    render() {
        const currentPage = this.props.page + 1;
        const maxPage = Math.ceil(this.props.numImgs / this.props.pageSize);
        return (
            <div className="pagination">
                <div
                    className={`page-button ${currentPage > 1 ? '' : 'button-disable'}`}
                    onClick={this.props.prevPage}
                >
                    ← Prev
                </div>
                <div>
                    Page {currentPage} / {maxPage}
                </div>
                <div
                    className={`page-button ${currentPage < maxPage ? '' : 'button-disable'}`}
                    onClick={() => this.props.nextPage(this.props.numImgs)}
                >
                    Next →
                </div>
            </div>
        )
    }
}

export default Pagination;