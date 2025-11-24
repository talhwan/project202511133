import React from 'react'
import {useState} from "react"; 
//useState 훅을 사용하기 위해서는 필수적으로 선언해주셔야 합니다!

export default function UseStateA() {

    // const arrayState = useState(0); //파라미터 안의 값은 초기값 설정!
    // //여기에는 실제 상태값, 상태를 변경할 수 있는 함수 이렇게 2개를 배열로 저장함.
    // const state = arrayState[0];
    // const setState = arrayState[1];

    // const [state, setState] = useState(0);
    // console.log("now state : " + state);

    const [count, setCount] = useState(0);
    const [light, setLight] = useState("OFF");

    return (
        <>
            <div>count : {count}</div>
            <button onClick={()=>{
                setCount(count + 1);
            }}>+1</button>
        
            <div>light : {light}</div>
            <button onClick={()=>{
                setLight(light === "ON" ? "OFF":"ON");
            }}>{light}</button>
        </>
    )
}
