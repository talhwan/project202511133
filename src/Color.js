import {useState} from 'react';

export default function Color(){
    const [color, setColor] = useState("RED");
     const changeColor = (obj_color) => {
        //color = "GREEN";
        setColor(obj_color);
    } 
    const [car, setCar] = useState({
        brand : "H"
        , model : "G"
        , year : 2000
        , color : "black"
    });
    const updateColor = (obj_color) => {
        setCar(
            previousState => {
                return {...previousState, color : obj_color}
            }
        );
    } 

    return(
        <div>
            <div>COLOR : {color} </div>
            <button onClick={() => setColor("Red")} >Red</button>
            <button onClick={() => changeColor("Blue")} >Blue</button>
            <div>CAR : {car.color}</div>
            <button onClick={() => updateColor("rrr")} >Car ---- red</button>
        </div>
    );
}