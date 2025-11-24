import React from 'react'
import {useState} from "react"; 

export default function UseStateC() {

    const [input, setInput] = useState({
      name : ""
      ,birth : ""
      ,gender : ""
    }); 
    console.log(input);

    const onChangeInput = (e) => {
      //
      setInput({
          ...input,
          [e.target.name] : e.target.value
      });
    }

  return (
    <>
        <input 
            value={input.name}
            name="name"
            placeholder="입력하세요!"
            onChange={onChangeInput}
            type="text"
            />
        <div>{input.name}</div>
        <input 
            value={input.birth}
            name="birth"
            placeholder="입력하세요!"
            onChange={onChangeInput}
            type="date"
            />
        <div>{input.birth}</div>

        <select name="gender" onChange={onChangeInput}>
          <option value="">--선택하세요--</option>
          <option value="F">여</option>
          <option value="M">남</option>
        </select>
        <div>{input.gender}</div>
    </>
  )
}
