import React from 'react';
import PropTypes from 'prop-types'
import './HobbyList.css'
import { Button, ListGroup, Col, Row } from 'react-bootstrap';
HobbyList.prototype = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
}
HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
}

function HobbyList(props) {
  const { hobbyList, onHobbyClick, onDelHobby } = props;
  return (
    <div className="mt-5">

      <ListGroup>
        {hobbyList.map(hobby => (
          <ListGroup.Item key={hobby.id}
            onClick={() => onHobbyClick(hobby)}
          >
            <Row>
              <Col xs={10}>
                {hobby.title}
              </Col>
              <Col xs={2}>
                <Button variant="outline-danger" size="sm" onClick={() => onDelHobby(hobby)}>Delete</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div >
  );

}

export default HobbyList;
