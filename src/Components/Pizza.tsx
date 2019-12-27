import React from 'react';
import {MdAdd} from "react-icons/md";
import {FiMinus} from "react-icons/fi";
import {FaPizzaSlice} from "react-icons/fa";
import "./pizza.css";

const Pizza = (props:any) => {

    return (
       
        <div className="mainbox;">
            <div className="beautify">
            {props.name}
            <FaPizzaSlice style={{fontSize:`${props.font}`}}/>
            <button onClick={props.dec}  disabled={!props.sta}><FiMinus/></button>
            {props.sta}
            <button onClick={props.inc}><MdAdd/></button>
            </div>
        </div>
       
    );
};

export default Pizza;