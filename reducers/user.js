import produce from "../util/produce";

const initialState = {
  // 초기값. 데이터의 구조를 잡는다.
  seq: null,
  id: null,
  nickname: "mirutree",
  isLogin: false,
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (
      action.type // 액션의 타입을 확인
    ) {
      case "CHANGE_NICKNAME":
        draft.nickname = action.data;
        break;
      default:
        return state;
    }
  });

export default reducer;