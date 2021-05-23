import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const PaginationList = props => {
  const { pagigation, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagigation;
  const [numb, setNumb] = useState([]);
  const totalPages = Math.ceil((_totalRows / _limit));

  function selectPage(params) {
    let arrNumb = [params];
    for (let index = params; index > 0; index--) {
      params--;
      if (params > 0) {
        arrNumb.push(params);
        arrNumb.sort();
        setNumb(arrNumb)
      }
    }
  }

  useEffect(() => {
    selectPage(totalPages)
  }, [totalPages])

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage)
    }
  }
  return (
    <div className="col-9 text-right m-auto">
      <Button
        variant={_page <= 1 ? "outline-danger" : "outline-primary"}
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - 1)}
      >
        prev
      </Button>
      {numb.map((item) => (
        <button
          key={item}
          onClick={() => handlePageChange(item)}
          className="btn outline-secondary"
        >{item}</button>
      ))}
      <Button
        variant={_page >= totalPages ? "outline-danger" : "outline-primary"}
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        next
      </Button>
    </div >
  );
};

export default PaginationList;
