import {useEffect} from "react";

export default function MyTimer(){

    let value;

    // 매번 렌더링마다 실행
    useEffect(
        () => {console.log("effect 1");}
    );

    //첫번째 렌더링에만 실행
    useEffect(
        () => {console.log("effect 2");}, []
    );

    // Case 3 first & 특정값 변경시 실행
    useEffect(
        ()=> {console.log("effect 3");}, [value]);

    return(
        <></>
    );
} 