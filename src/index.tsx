import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Pizza from './Components/Pizza';
import Children from './Components/children';

const App = () => { 
  const [state1, setstate1] = useState(0);
  const [state2, setstate2] = useState(0);
  const [state3, setstate3] = useState(0);
  const [mul,setmul] = useState(0);
  const [mul1,setmul1] = useState(0);
  const [mul2,setmul2] = useState(0);
  const [Adult, setAdult] = useState(0);
  const [children, setchildren] = useState(0);


  const inciment = () => {
      setstate1(state1 + 1);
      setmul((state1*150)+150);
      setchildren(state1+1);
  }
 
  const diciment = () => {
      setstate1(state1 - 1);
      setmul((state1*150)-150);
      setchildren(state1);
  }

  const inciment1 = () => {
    setstate2(state2 + 1);
    setmul1((state2*200)+200);
    setchildren(state1);
    setAdult(state1);
  }

   const diciment1 = () => {
    setstate2(state2 - 1);
    setmul1((state2*200)-200);
   }

  const inciment2 = () => {
  setstate3(state3 + 1);
  setmul2((state3*300)+300);
  setchildren((state3*4)+4);
  setAdult(state3+1);
  }

  const diciment2 = () => {
  setstate3(state3 - 1);
  setmul2((state3*300)-300);
  setchildren((state3*4)-4);
  setAdult(state3-1);
  }
  
  
  return(
      <div>
        <h1 style={{textAlign:"center"}}>Assignment</h1>
        <hr></hr>
        <div className="abcd">
        <div>
           <Pizza name={"small"} font={16} price={100} inc={inciment} dec={diciment} sta={state1}/>
           <Pizza name={"medium"} font={22} price={150} inc={inciment1} dec={diciment1} sta={state2}/>
           <Pizza name={"large"} font={30} price={200} inc={inciment2} dec={diciment2} sta={state3}/>
           <hr></hr>  
            <Children fis={children} sec={Adult}/>
          </div>   
        </div>
        <hr></hr>
        <h1 style={{marginLeft:"10px"}}>The order Total is: <span style={{color:"red"}}>{mul1+mul2+mul}
        </span></h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));