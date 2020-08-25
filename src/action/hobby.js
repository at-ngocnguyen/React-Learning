export const addNewHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    payload: hobby
  }
};

export const setActiveHobby = (hobby) => {
  return {
    type: 'SET_ACTIVE_HOBBY',
    payload: hobby
  }
};

export const deleteHobby = (hobby) => {
  return {
    type: 'DEL_HOBBY',
    payload: hobby
  }
};

export const clearHobby = () => {
  return {
    type: 'CLEAR_HOBBY',
  }
};
