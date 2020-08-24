import React from 'react';
import PropTypes from 'prop-types'
import './HobbyList.css'
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
  const { hobbyList, activeId, onHobbyClick, onDelHobby, onEditHobby } = props;
  return (
    <div className="">

      <ul className="hobby-list">
        {hobbyList.map(hobby => (
          <li key={hobby.id}
            className={hobby.id === activeId ? 'active' : ''}
            onClick={() => onHobbyClick(hobby)}
          >
            {hobby.title}
            <button onClick={() => onDelHobby(hobby)}>Delete</button>
            <button onClick={() => onEditHobby(hobby)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default HobbyList;
