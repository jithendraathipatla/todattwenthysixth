import React,{useState, useEffect} from 'react';
import {MdAdd} from "react-icons/md";
import {FiMinus} from "react-icons/fi";

import "./pizza.css";


const Pizza = (props:any) => {
    
    const [state, setstate] = useState(0);
    const [mul,setmul] = useState(props.tit);
    const [total,settotal] = useState<Array<number>>([]);
  
    useEffect(() => { 
        settotal([state*mul]);
    }, [state]);

    const inciment = () => {
        setstate(state + 1);
    
    }
    const diciment = () => {
        setstate(state - 1);
    }

  

    return (
        console.log(total),
        <div>
        <div className="mainbox;">
            <div className="beautify">
            <button onClick={diciment} disabled={!state} ><FiMinus/></button>
            {state}
            <button onClick={inciment}><MdAdd/></button>
            </div>
        </div>
        {total}
        </div>
    );
};

export default Pizza;