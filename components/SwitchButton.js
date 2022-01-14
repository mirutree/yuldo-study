import styled from "styled-components";
import ToggleOn from "../public/images/toggle_on.svg";
import ToggleOff from "../public/images/toggle_off.svg";
import SearchImg from "../public/images/search.svg";

const SwitchButton = ({
  switch_state,
  select_size,
  input_size,
  button_size,
  placeholder_text
}) => (
  <Container>
    <ToggleContainer>
      <ToggleText>스티커</ToggleText>
      <ToogleImage>
        <ToggleImgOn onClick={imgclick}/>
      </ToogleImage>
    </ToggleContainer>
    <ToggleContainer2>
      <ToggleText>필터링</ToggleText>
      <ToogleImage>
        <ToggleImgOff onClick={imgclick } switch_state={on}/>
      </ToogleImage>
    </ToggleContainer2>
    <SearchContainer>
      <Select size={select_size}>
        <option>제목+내용</option>
      </Select>
      <InputBox placeholder={placeholder_text} size={input_size} />
      <Button size={button_size}>
        <BUttonImage />
        <span>검색</span>
      </Button>
    </SearchContainer>
  </Container>
);

export default SwitchButton;

const Container = styled.div`
  width: 890px;
  height: 60px;
  background-color: #F2F7FB;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleContainer = styled.div`
  /* margin-left: 100px; */
`;
const ToggleContainer2 = styled.div`
  margin-left: 30px;
`;
const SearchContainer = styled.div`
  margin-left: 30px;
`;

const ToggleText = styled.span`
    height: 18px;
    color: #393535;
    font-size: 13px;
    text-align: right;
    letter-spacing: 0;
    color: #393535;
    opacity: 1;
`;

const ToogleImage = styled.span`
  margin-left: 5px;
`;

const Select = styled.select`
  width: ${(props) => (props.size ? props.size : 97)}px;
  height: 35px;
  border: 1px solid #d2d2d2;
  font-size: 13px;
  text-align: center;

  option {
    letter-spacing: 0px;
    color: #393535;
  }
`;

const InputBox = styled.input`
  width: ${(props) => (props.size ? props.size : 240)}px;
  height: 35px;
  border: 1px solid #d2d2d2;
  font-size: 13px;
  text-indent: 11.5px;
  margin-left: 5px;
`;

const Button = styled.button`
  width: ${(props) => (props.size ? props.size : 78)}px;
  height: 35px;
  margin-left: 5px;
  border: 1px solid #707070;
  span {
    color : #1E1E1E;
    font-size: 13px;
  }
`;

const BUttonImage = styled(SearchImg)``;

const ToggleImgOn = styled.img.attrs({
  src: "../images/toggle_on.svg",
})`
width: 50px;
height: 20px;
`;

const ToggleImgOff = styled(ToggleOff)``;

const imgclick = () => {
  console.log('클릭');
  switch_state == 'on' ? switch_state('off') : switch_state('on');
  console.log(switch_state);
};
