import React, { Component } from "react";

export default class Row extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onDeleteRow, data } = this.props;
    return (
      <tr>
        <td>{data.email}</td>
        <td>{data.country}</td>
        <td>{data.gender}</td>
        <td>{data.info}</td>
        <td>
          <button className="btn btn-danger" onClick={onDeleteRow(data.id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
