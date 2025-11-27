import { useState, useRef } from 'react';

export default function LastClickTime(){

    let [msg, setMsg] = useState("아직 클릭 전!");
    let ref = useRef(null);

    function listener_timer(){
        let now = new Date();
        if(ref.current === null){
            setMsg("지금 처음 클릭하셨지요?");
        } else {
            setMsg("이전에 너가 클릭한 시간 : " + ref.current + "// 지금 클릭 시간 : " + now);
        }
        ref.current = now;
    }

    return(
        <>
            <button onClick={listener_timer}>click timer!</button>
            <p>{msg}</p>
        </>
    );
}