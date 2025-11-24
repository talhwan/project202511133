import React from 'react'
import { useState } from 'react';

//커스텀 훅 만들기 가능! //use로 시작해야 함 함수 이름이!!
function useInput(){
    const [input, setInput] = useState("");
    const onChange = (e) => {
        //
        setInput(e.target.value);
    }
    return [input, onChange];
}

export default function UseStateD() {

    const [input1, onChange1] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <>
            <div>
                <input 
                value={input1}
                onChange={onChange1}
                />
                <div>{input1}</div>

                <input 
                value={input2}
                onChange={onChange2}
                />
                <div>{input2}</div>
            </div>
        </>
    )
}
