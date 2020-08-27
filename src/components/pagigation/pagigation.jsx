import React from 'react';
import { Button } from 'react-bootstrap';

const PaginationList = props => {
  const { pagigation, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagigation;

  const totalPages = Math.ceil((_totalRows / _limit));

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage)
    }
  }
  return (
    <div>
      <Button
        variant="outline-danger"
        disabled={_page <= 1}
        className="mr-5 ml-5"
        onClick={() => handlePageChange(_page - 1)}
      >
        prev
      </Button>
      <Button
        variant="outline-danger"
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        next
      </Button>
    </div >
  );
};

export default PaginationList;
