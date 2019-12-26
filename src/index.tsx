import React, {useState, FunctionComponent} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Pizza from './Components/Pizza'
import {FaPizzaSlice} from "react-icons/fa";

const App = () => { 
  const [arr,setarr] = useState([]);
  const [state1, setstate1] = useState(0);
    const [state, setstate] =  useState([{
      name:"small",
      price:150,
    },{
      name:"medium",
      price:200,
    },
    {
      name:"large",
      price:300,
    }
    ]);

    const propreties = () => {
      return state.map((item,i)=>{
            return(
              <div>
                 <div key={i} className="abcd">
                    <div> <FaPizzaSlice /></div>
                  {item.name} <Pizza tit={item.price} />
                </div>
              </div>
              
            )
        })
    }
    
    return(
        <div>
            <h1>I am working</h1>
            {propreties()}
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


