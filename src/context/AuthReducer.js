const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                Current_User: action.payload,
            };
        }
        case "LOGOUT": {
            return {
                Current_User: null,
            };
        }
        default:
            return state;
    }
};

export default AuthReducer;