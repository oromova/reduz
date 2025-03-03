const initialState = {
  counter: 0,
  open: false,
  card: [],
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'open_modal':
      return { ...state, open: true };
    case 'close_modal':
      return { ...state, open: false };
    default: return state;
  }
};