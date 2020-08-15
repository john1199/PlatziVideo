/* eslint-disable no-case-declarations */
const reducer = (state, action) => {
  switch (action.type) {
    //evita añadir a favorito si ya esta
    case 'SET_FAVORITE':
      const itemId = state.myList.find((items) => items.id === action.payload.id);
      if (itemId) return state;
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
