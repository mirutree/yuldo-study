import produce from "../util/produce";

const initialState = {
  Posts: [],
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
  isSuccess: false,
};

export const BOARD_ALL_REQUEST = "BOARD_ALL_REQUEST";
export const BOARD_ALL_SUCCESS = "BOARD_ALL_SUCCESS";
export const BOARD_ALL_FAILURE = "BOARD_ALL_FAILURE";

export const BOARD_WRITE_REQUEST = "BOARD_WRITE_REQUEST";
export const BOARD_WRITE_SUCCESS = "BOARD_WRITE_SUCCESS";
export const BOARD_WRITE_FAILURE = "BOARD_WRITE_FAILURE";

// 글 내용 불러오는 액션
export const BOARD_DETAIL_REQUEST = "BOARD_DETAIL_REQUEST";
export const BOARD_DETAIL_SUCCESS = "BOARD_DETAIL_SUCCESS";
export const BOARD_DETAIL_FAILURE = "BOARD_DETAIL_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case BOARD_ALL_REQUEST:
        draft.isLoading = true;
        break;
      case BOARD_ALL_SUCCESS:
        draft.Posts = action.data;
        draft.isLoading = false;
        break;
      case BOARD_ALL_FAILURE:
        draft.isLoading = false;
        draft.Posts = [];
        break;
      case BOARD_WRITE_REQUEST:
        draft.isLoading = true;
        draft.isSuccess = false;
        draft.message = "";
        break;
      case BOARD_WRITE_SUCCESS:
        draft.isSuccess = true;
        draft.isLoading = false;
        draft.message = "";
        break;
      case BOARD_WRITE_FAILURE:
        draft.isSuccess = false;
        draft.isLoading = false;
        draft.post = [];
        draft.message = action.error.err;
        break;
      case BOARD_DETAIL_REQUEST:
        draft.isLoading = true;
        draft.isSuccess = false;
        draft.message = "";
        break;
      case BOARD_DETAIL_SUCCESS:
        draft.isLoading = false;
        draft.isSuccess = true;
        draft.post = action.data;
        draft.message = "";
        break;
      case BOARD_DETAIL_FAILURE:
        draft.isLoading = false;
        draft.isSuccess = false;
        draft.post = {};
        draft.message = action.error.err;
        break;

      default:
        return state;
    }
  });

export default reducer;
