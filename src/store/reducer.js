const initialState = {
    account: "",
    balance: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_INFO":
            return { ...state, ...action.payload };

        default:
            return state;
    }
};
