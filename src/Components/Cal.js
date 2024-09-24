import React, { useState } from 'react'
import Display from './Display';
import CurrentValue from './CurrentValue';

const Cal = () => {
   
  const [input, setInput] = useState('');

    const buttons = ['7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'];

const handleButtonClick = (value) => {
    if (value === '=') {
        calculateResult();
    } else {
        setInput(input + value);
    }
};

const calculateResult = () => {
    try {
        setInput(eval(input).toString());
    } catch (error) {
        setInput('Error');
    }
};

const Clear = () =>{
    setInput('');
};

const Delete = () =>{
   setInput(input.substring(0, input.length - 1));
}

  return (
    <div className='calculator'>
         <div className='display'>
           <Display value={input}/>
           <CurrentValue value={input[input.length-1]}/>
         </div>
      {buttons.map((btn) =>(
        <button key={btn} onClick={()=> handleButtonClick(btn)}>
            {btn}
        </button>
      ))}
      <button onClick={Clear} style={{"width":"130px"}}>AC</button>
      <button onClick={Delete} style={{"width":"130px"}}>DEL</button>
    </div>
  )
}


export default Cal
