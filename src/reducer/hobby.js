const initialState = {
  list: [],
  activeId: null,
}
const HobbyReducer = (state = initialState, action) => {
  let newList = [];
  switch (action.type) {
    case 'ADD_HOBBY': {
      newList = [...state.list];
      newList.push(action.payload)
      return { ...state, list: newList };
    };
    case 'DEL_HOBBY': {
      newList = [...state.list];
      const index = newList.findIndex(x => x.id === action.payload.id);
      newList.splice(index, 1);
      return { ...state, list: newList, activeId: '' };
    };
    case 'SET_ACTIVE_HOBBY': {
      const newActiveId = action.payload.id;
      return { ...state, activeId: newActiveId };
    };
    case 'CLEAR_HOBBY': {
      return { ...state, list: [] };
    }

    default:
      return state;
  }
}
export default HobbyReducer;
