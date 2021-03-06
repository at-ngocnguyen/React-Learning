import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import Search from 'components/search/search';
import PostList from 'components/pagination/list';
import PaginationList from 'components/pagination/pagination';
function Pagination(props) {
  //======================== Pagination Exercise ========================//

  // useState() là hàm khởi tạo State thay vì khởi tạo bằng contructor, set lại giá trị của state thông qua gọi lại giá trị được khởi tạo đi kèm, thí dụ ở phía dưới
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  })
  useEffect(() => {
    async function fetchApi() {
      try {
        const paramString = queryString.stringify(filter);// convert object filter thành string
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`
        const response = await fetch(requestUrl); //Call API
        const respondseJSON = await response.json(); // Trả Api về dạng object
        const { data, pagination } = respondseJSON; // Khai báo giá trị để hứng API
        setPostList(data); // Cập nhật dự liệu để render trên ListPost component
        setPagination(pagination); // Cập nhật số trang trên Pagination component
      } catch (error) {
        console.log('Fail ', error.massage);
      }
    }
    fetchApi();
    return setPagination({});
  }, [filter]);
  // Api sẽ chạy lại khi filter được thay đổi

  const handlePageChange = (newPage) => {
    setFilter({
      ...filter,
      _page: newPage
    })
  }
  // Function handlePageChange() là hàm callback để nhận binding giá trị
  // newPage từ component con lên bằng phương pháp callback event




  //============================= Exercise Filter Seacrh ==============================//

  function handleSeacrhChange(params) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: params.search
    })
  }
  // Function callback từ component con sẽ set lại filter dẫn tới useEffect (dòng 27)
  //  request lại API với query Params được cộng dồn với title_like

  return (
    <div>
      <Search
        onSubmit={handleSeacrhChange}
      />

      <PostList postList={postList} />
      <PaginationList
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Pagination;
