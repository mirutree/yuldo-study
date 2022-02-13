import styled from "styled-components";
import HeaderImg from "../public/images/header_image.svg";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_USER_REQUEST, LOGIN_USER_REQUEST} from "../reducers/user";
import { Oval } from "react-loader-spinner";

const LayoutHeader = () => {
    const [id, setId] = useState('zena');
    const [password, setPassword] = useState('asdf1234');
    const dispatch = useDispatch();
    const { isLoading, isLogIn, user } = useSelector((state) => state.user);

    useEffect(() => {
        if (!user?.seq) {
            const l_user_seq = localStorage.getItem('user_seq');
            dispatch({
                type: LOAD_USER_REQUEST,
                data : l_user_seq
            })

        } else {
            localStorage.setItem('user_seq', user?.seq);

        }
    }, [user]);

    const userLogIn = () => {
        dispatch({
            type: LOGIN_USER_REQUEST,
            data: { id, password }
        });
    };



    return(
        <>
        {isLoading && <Spinner color="#00BFFF" height={80} width={80} />}
          <Container>
            <ImageContainer>
              <HeaderImage />
            </ImageContainer>
            <MenuContainer>
                <UserButton onClick={() => userLogIn()}>{isLogIn ? '로그아웃' : '로그인'}</UserButton>
                <UserButton>회원가입</UserButton>
            </MenuContainer>
          </Container>
        </>
    )
};

export default LayoutHeader;

const Container = styled.div``;

const ImageContainer = styled.div`
  background: transparent linear-gradient(97deg, #f8e1e8 0%, #fbf3dd 100%);
  width: 100vw;
  height: 15%;
  display: flex;
  justify-content: center;
`;

const MenuContainer = styled.div`
  background: #393535;
  width: 100vw;
  height: 10%;
  display: flex;
`;

const HeaderImage = styled(HeaderImg)`
  width: 80%;
`;

const UserButton = styled.div`
  background: #393535;
  border: 1px solid #828282;
  color: #ffffff;
  font-size: 12px;
  width: 84px;
  height: 27px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  
`;

const Spinner = styled(Oval)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
