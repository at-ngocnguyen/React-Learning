import React from 'react';

const PostList = props => {
  const { postList } = props
  return (
    <ul>
      {postList.map(list => (
        <li key={list.id}>
          {list.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;