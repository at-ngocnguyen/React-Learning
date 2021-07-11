import React from "react";
import { ListGroup } from "react-bootstrap";

const PostList = (props) => {
  const { postList } = props;
  return (
    <ListGroup className="m-auto col-9 py-5">
      {postList &&
        postList.map((list) => (
          <ListGroup.Item key={list.id} className="m-2">
            {list.email}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default PostList;
