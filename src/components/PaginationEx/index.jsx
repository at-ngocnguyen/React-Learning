import React, { useEffect, useState } from "react";
import PostList from "./list";

const PaginationList = () => {
  const [data, setData] = useState([]);
  const [numb, setNumb] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const requestUrl = `https://reqres.in/api/users?page=${page}`;
        const response = await fetch(requestUrl);
        const respondJSON = await response.json();
        setData(respondJSON.data);
        let arrNumb = [respondJSON.total_pages];
        for (let index = respondJSON.total_pages; index > 0; index--) {
          respondJSON.total_pages--;
          if (respondJSON.total_pages > 0) {
            arrNumb.push(respondJSON.total_pages);
            arrNumb.sort();
            setNumb(arrNumb);
          }
        }
      } catch (error) {
        console.log("Fail ", error.massage);
      }
    };
    fetchAPI();
  }, [page]);
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="">
      <PostList postList={data} />
      <button disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>
        prev
      </button>
      {numb.map((item) => (
        <button onClick={() => handlePageChange(item)}>{item}</button>
      ))}
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page >= numb.length}
      >
        next
      </button>
    </div>
  );
};

export default PaginationList;
