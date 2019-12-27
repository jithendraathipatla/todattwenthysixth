import React from 'react';
import {FaChild, FaPercentage} from 'react-icons/fa';
const children = (props:any) => {
    return (
        <div>
        <div><FaChild/> The n.of children who can eat the pizza: {props.fis}</div> 
        <div>OR</div>
        <div><FaPercentage/> The n.of Adults  who can eat the pizza: {props.sec}</div>
        </div>
    );
};

export default children;