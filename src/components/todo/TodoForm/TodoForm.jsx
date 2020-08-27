import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null
}
function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    setValue('');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control placeholder="ok" type="text" value={value} onChange={handleValueChange}></Form.Control>
    </Form>
  );
}

export default TodoForm;
