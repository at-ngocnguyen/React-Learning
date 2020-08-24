import React from 'react';
import { ListGroup } from 'react-bootstrap';

const PostList = props => {
  const { postList } = props
  return (
    <ListGroup style={{ width: "70%"}} className="m-auto">
      {postList.map(list => (
        <ListGroup.Item key={list.id} className="m-2">
          {list.title}
        </ListGroup.Item>
      ))}
    </ListGroup>

  );
};

export default PostList;