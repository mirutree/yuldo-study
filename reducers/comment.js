import produce from "../util/produce";

const initialState = {
  comments: [
    {
      seq: "",
      c_like: "",
      c_dislike: "",
      ins_dttm: null,
      upt_dttm: null,
    },
  ],
  commentLoading: null,
  commentSuccess: null,
  commentError: null,
  User: [],
  Post: [],
};

export const COMMENT_LOAD_REQUEST = "COMMENT_LOAD_REQUEST";
export const COMMENT_LOAD_SUCCESS = "COMMENT_LOAD_SUCCESS";
export const COMMENT_LOAD_FAILURE = "COMMENT_LOAD_FAILURE";

export const COMMENT_WRITE_REQUEST = "COMMENT_WRITE_REQUEST";
export const COMMENT_WRITE_SUCCESS = "COMMENT_WRITE_SUCCESS";
export const COMMENT_WRITE_FAILURE = "COMMENT_WRITE_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case COMMENT_WRITE_REQUEST:
        draft.commentLoading = true;
        draft.commentSuccess = false;
        break;
      case COMMENT_WRITE_SUCCESS:
        draft.commentLoading = false;
        draft.commentSuccess = true;
        //draft.comments = action.data;
        break;
      case COMMENT_WRITE_FAILURE:
        draft.commentLoading = false;
        draft.commentSuccess = false;
        draft.commentError = action.error.err;
        break;
      case COMMENT_LOAD_REQUEST:
        draft.commentLoading = true;
        //draft.commentSuccess = false;
        break;
      case COMMENT_LOAD_SUCCESS:
        draft.commentLoading = false;
        //draft.commentSuccess = true;
        draft.comments = action.data;
        break;
      case COMMENT_LOAD_FAILURE:
        draft.commentLoading = false;
        //draft.commentSuccess = false;
        draft.commentError = action.error.err;
        break;
      default:
        return state;
    }
  });

export default reducer;
