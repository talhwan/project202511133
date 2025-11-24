import React from 'react'
import {useState} from "react"; 

// 함수 컴포넌트 내부에서만 호출 가능!
// 조건문 반복문에서는 호출 불가
export default function UseStateB() {

  const [name, setName] = useState("");
  const onChangeName = (e) => {
      setName(e.target.value);
  }
  const [birth, setBirth] = useState("");
  const onChangeBirth = (e) => {
      setBirth(e.target.value);
  }
  const [gender, setGender] = useState("");
  const onChangeGender = (e) => {
      setGender(e.target.value);
  }
  
  return (
    <>
        <input 
            value={name}
            placeholder="입력하세요!"
            onChange={onChangeName}
            type="text"
            />
        <div>{name}</div>
        
        <input 
            value={birth}
            placeholder="입력하세요!"
            onChange={onChangeBirth}
            type="date"
            />
        <div>{birth}</div>

        <select onChange={onChangeGender}>
          <option value="">--선택하세요--</option>
          <option value="F">여</option>
          <option value="M">남</option>
        </select>
        <div>{gender}</div>
    </>
  )
}
