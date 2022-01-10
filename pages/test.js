import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const test = () => {
  const [ new_nickname, setNickname ] = useState(); // useState 안에 있는 state관리

  const { nickname } = useSelector((state) => state.user); 
  // redusers/user.js에 초기값에 nickname이라고 선언했으므로 이름을 그대로 가져와야 함
  
  const changeNick = useCallback(() => { // useCallback 함수캐싱
    console.log(nickname);
  }, [new_nickname]);

  const changeInput = useCallback((e) => {
    const {name, value} = e.target;
    setNickname(value);
  }, [new_nickname]);

  
  return (
    <>
      <input type="text" onChange={changeInput}/>
      <button onClick={()=> changeNick()}>변경</button>
    </>
  )
}

export default test;