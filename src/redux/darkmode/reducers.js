const initialState = {
  isDarkMode: false,
};

export const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};
