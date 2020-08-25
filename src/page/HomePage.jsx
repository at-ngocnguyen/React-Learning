import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import queryString from 'query-string'
import HobbyList from '../components/home/HobbyList/HobbyList';
import Pagigation from '../components/home/pagigation/pagigation';
import PostList from '../components/home/pagigation/list'
import { addNewHobby, setActiveHobby, clearHobby, deleteHobby } from '../action/hobby'
import Search from '../components/search/search';
import Clock from '../components/clock';
import Fake from '../components/clock/fake';
import { Form, Col, Button } from 'react-bootstrap';
// or less ideally

function HomePage(props) {


  //======================== Pagination Exercise ========================//

  // useState() là hàm khởi tạo State thay vì khởi tạo bằng contructor, set lại giá trị của state thông qua gọi lại giá trị được khởi tạo đi kèm, thí dụ ở phía dưới
  const [postList, setPostList] = useState([]);
  const [pagigation, setPagigation] = useState({
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
        const paramString = queryString.stringify(filter);// convert object filter (dòng 29) thành string
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`
        const response = await fetch(requestUrl); //Call API
        const respondseJSON = await response.json(); // Trả Api về dạng object
        const { data, pagination } = respondseJSON; // Khai báo giá trị để hứng API
        setPostList(data); // Cập nhật dự liệu để render trên ListPost component
        setPagigation(pagination); // Cập nhật số trang trên Pagination component
      } catch (error) {
        console.log('Fail ', error.massage);
      }
    }
    fetchApi();
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



  //========================= Exercise Hobby List =================================//
  // Dispatch hỗ trợ cho người dùng có thể truyền action đến Reducer
  const dispatch = useDispatch();
  //Strict comparition

  // useSelector() gọi props từ Store về (fuke store.js)
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  //Shallow comparition
  // const hobbyState = useSelector(state => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.activeId
  // }),shallowEqual);

  const [hobby, setHobby] = useState('');

  const handleAddHobby = () => {
    const newHobby = {
      id: hobbyList.length + 1,
      title: hobby
    }
    if (hobby) {
      const action = addNewHobby(newHobby);
      dispatch(action);
      setHobby('')
    }
  }


  const handdleClearHobby = () => {
    const action = clearHobby();
    dispatch(action);
  }

  const handleActiveHobby = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  }

  const handleDelHobby = (hobby) => {
    const action = deleteHobby(hobby);
    dispatch(action);
  }
  // Handle lấy value input
  const handleChangeValue = (e) => {
    if (e.target.value) {
      setHobby(e.target.value);
    }
  }



  //======================= Clock Exercise ==============================//
  const [show, setShow] = useState(true);


  return (
    <div className="container">
      <Form.Group>
        <Form.Row className="m-auto pt-5">
          <Form.Label column="lg" lg={2}>Hobby</Form.Label>
          <Col xs={7}>
            <Form.Control type="text" value={hobby || ''} onChange={handleChangeValue} />
          </Col>
        </Form.Row>
      </Form.Group>
      <Button variant="success" onClick={handleAddHobby}>Random Hobby</Button>
      <Button variant="danger" className="ml-5" onClick={handdleClearHobby}>Clear</Button>
      <HobbyList hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleActiveHobby}
        onDelHobby={handleDelHobby}
      />
      <hr />
      {show && <Clock />}
      <Fake/>
      <Button onClick={() => setShow(!show)}>{show ? 'Close' : 'Open'}</Button>
      <hr />
      <Search
        onSubmit={handleSeacrhChange}
      />

      <PostList postList={postList} />
      <Pagigation
        pagigation={pagigation}
        onPageChange={handlePageChange}
      />

    </div>
  );

}

export default HomePage;
