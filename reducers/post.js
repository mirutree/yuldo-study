const initialState = {
    post: {
        seq: null,
        title: null,
        contents: null,
        writer: null
    },
    Comment: [],
    User: [],

}

export const BOARD_ALL_REQUEST = 'BOARD_ALL_REQUEST';
export const BOARD_ALL_SUCCESS = 'BOARD_ALL_SUCCESS';
export const BOARD_ALL_FAILURE = 'BOARD_ALL_FAILURE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOARD_ALL_REQUEST:
            return {}
        default :
            return state
    }
};

export default reducer;