import styled from "styled-components";

const CommentsBox = () => (
  <Container>
    <InputBox type="text" placeholder="댓글을 입력해주세요" />
    <InputBoxButton>등록</InputBoxButton>
  </Container>
);

export default CommentsBox;

const Container = styled.div``;

const InputBox = styled.textarea`
  float: left;
  height: 95px;
  width: calc(100% - 130px);
  font-size: 13px;
  border: 1px solid #d2d2d2;
  background: #ffffff;
  opacity: 1;
  padding-left: 11.5px;
  padding-top: 5px;
  resize: none;
`;

const InputBoxButton = styled.button`
  margin-left: 5px;
  float: left;
  height: 104px;
  width: 102px;
  background: #393535;
  border: 1px solid #393535;
  opacity: 1;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;