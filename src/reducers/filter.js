const filterReducer = (option = 'All', action) => {
  if (action.type === 'CHANGE_FILTER') {
    return action.payload;
  }
  return option;
};

export default filterReducer;
