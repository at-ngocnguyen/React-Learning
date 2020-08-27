import React, { useState } from 'react';
import { Form, Col, Button, ButtonGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNewHobby, setActiveHobby, deleteHobby, clearHobby } from '../action/hobby';
import HobbyList from '../components/HobbyList/HobbyList';

function Hobby(props) {
  //========================= Exercise Hobby List =================================//
  // Dispatch hỗ trợ cho người dùng có thể truyền action đến Reducer
  const dispatch = useDispatch();
  //Strict comparition

  // useSelector() gọi props từ Store về (file store.js)
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
      setHobby('');
    } else {
      alert('Please Input your HOBBY');
    }
  }


  const handdleClearHobby = () => {
    if (window.confirm('Are you sure!')) {
      const action = clearHobby();
      dispatch(action);
    }
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
  return (
    <div>
      <Form.Group as="form">
        <Form.Row className="m-auto">
          <Form.Label column="lg" lg={2} className="text-center">Hobby</Form.Label>
          <Col xs={7} className="m-auto">
            <Form.Control type="text" value={hobby || ''} placeholder="Input your Hobby" onChange={handleChangeValue} />
          </Col>
        </Form.Row>
      </Form.Group>
      <ButtonGroup className="m-auto">
        <Button variant="success" onClick={handleAddHobby}>Random Hobby</Button>
        <Button variant="danger" onClick={handdleClearHobby}>Clear</Button>
      </ButtonGroup>
      <HobbyList hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleActiveHobby}
        onDelHobby={handleDelHobby}
      />
    </div>
  );
}

export default Hobby;
