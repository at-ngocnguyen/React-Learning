import React, { useState } from "react";
import Row from "./Row";
const FormHooks = () => {
  const [formValue, setFormValue] = useState({});
  const [listUser, setListUser] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { ...formValue, id: listUser.length + 1 };
    setListUser([...listUser, user]);
  };
  const handleChange = (e) => {
    if (e.target.value) {
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleRemoveUser = (id) => {
    const removeItem = listUser.filter((item) => item.id !== id);
    setListUser([...removeItem]);
  };
  return (
    <>
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
          {listUser.map((data, index) => (
            <Row key={index} data={data} onRemove={handleRemoveUser} />
          ))}
        </tbody>
      </table>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Your Country</label>
          <select
            name="country"
            className="form-control"
            onChange={handleChange}
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
                  handleChange(e);
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
                  handleChange(e);
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
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-large btn-dark w-100"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FormHooks;
