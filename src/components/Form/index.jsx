import React, { Component } from "react";
import Row from "./Table/Row";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      listUser: [],
    };
  }
  handleChange = (event) => {
    const value = event.target.value || null;
    this.setState((prev) => ({
      form: {
        ...prev.form,
        [event.target.name]: value,
      },
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(this.state.form).length > 0) {
      const user = { ...this.state.form, id: this.state.listUser.length + 1 };
      this.setState((prev) => ({
        listUser: [...prev.listUser, user],
      }));
    }
  };
  handleRemoveUser = (id) => {
    this.setState((prev) => ({
      listUser: prev.listUser.filter((item) => item.id !== id),
    }));
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Your Country</label>
            <select
              name="country"
              className="form-control"
              onChange={this.handleChange}
            >
              <option value="">Please choose</option>
              <option value="vn">Viet Nam</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="form-check">
              <label>
                Male
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="male"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </label>
              <label>
                Female
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="female"
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Information</label>
            <textarea
              className="form-control"
              name="info"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button className="btn btn-large btn-dark w-100">Submit</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listUser.length
              ? this.state.listUser.map((data, index) => (
                  <Row
                    key={data.id}
                    data={data}
                    onDeleteRow={this.handleRemoveUser}
                  />
                ))
              : null}
          </tbody>
        </table>
      </>
    );
  }
}

export default Form;
