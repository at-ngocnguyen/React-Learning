import React from 'react';

const Pagigation = props => {
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
      <button
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - 1)}
      >
        prev
      </button>
      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        next
      </button>
    </div >
  );
};

export default Pagigation;
