const initialState = {
    basket: 1,
};
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MEAL":
            return { ...state, basket: state.basket + 1 };
        case "MINUS_MEAL":
            return { ...state, basket: state.basket > 0 ? state.basket - 1 : 0 }; // Adjusted case for MINUS_MEAL
        default:
            return state;
    }
};

export default Reducer;
