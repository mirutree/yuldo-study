import { delBasePath } from "next/dist/shared/lib/router/router";

const initialState = {
    post: {
        seq: null,
        title: null,
        contents: null,
        writer: null,
        date: null,
        category: null,
        comment_count: null,
        like: null,
    },
    Comment: [],
    User: [],
    isLoading: false,
}

export const BOARD_ALL_REQUEST = 'BOARD_ALL_REQUEST';
export const BOARD_ALL_SUCCESS = 'BOARD_ALL_SUCCESS';
export const BOARD_ALL_FAILURE = 'BOARD_ALL_FAILURE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOARD_ALL_REQUEST:
            return {...state, isLoading: true}
        case BOARD_ALL_SUCCESS:
            return {...state, post: action.data, isLoading: false}
        case BOARD_ALL_FAILURE:
            return {...state, isLoading: false, post: []}
        default :
            return state
    }
};

export default reducer;