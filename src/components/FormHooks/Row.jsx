import React from "react";

const Row = (props) => {
  const { onRemove, data } = props;
  const onRemoveUser = (id) => {
    if (onRemove) {
      onRemove(id);
    }
  };
  return (
    <tr>
      <td>{data.email}</td>
      <td>{data.country}</td>
      <td>{data.gender}</td>
      <td>{data.info}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => onRemoveUser(data.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Row;
