const initialState = {
  counter: 0,
  open: false,
  card: JSON.parse(localStorage.getItem('card')) || [],
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'open_modal':
      return { ...state, open: true };
    case 'close_modal':
      return { ...state, open: false };
    case 'add_cars':
      const saveCars = [...state.card, action.payload ]
      localStorage.setItem('card', JSON.stringify(saveCars));
      return { ...state, card: saveCars };
    case 'remove_cars':
      const update = state.card.filter(car => car?.id !== action.payload);
      return { ...state, card: update };
    default: return state;
  }
};