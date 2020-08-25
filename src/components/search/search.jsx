import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

Search.propTypes = {
  onSubmit: PropTypes.func
};
Search.defaultProps = {
  onSubmit: null
}
function Search(props) {
  const { onSubmit } = props;
  const [search, setSearch] = useState('');
  // debounce : là phương pháp đợi cho đến khi event kết thúc thì mới thực hiện
  const typing = useRef(null);
  // Khai báo debounce
  const hanleChangeValue = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!onSubmit) return;

    if (typing.current)  clearTimeout(typing.current);
    // Remove setTimeout, ở đây để tránh trường hợp bị lặp setTimeout
     
    typing.current = setTimeout(() => {
      const formValue = {
        search: value,
      }
      onSubmit(formValue)
    }, 300);
    // ở đây debounce sẽ can thiệp vào function khiến cho function chạy khi event onChange của input kết thúc thì mới thực hiện onSubmit()
  }
  return (
    <Form>
      <Form.Control type="text"
        value={search}
        onChange={hanleChangeValue}
        placeholder="Typing for search"
      />
    </Form>
  );
}

export default Search;
