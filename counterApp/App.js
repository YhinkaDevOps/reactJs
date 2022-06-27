
import React, { useState } from 'react';
import './counterApp/App.css';

const App = () => {
   const [count, setCount] = useState(0);
  return (
    <div className='container'>
        <div className='counter-box'>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button >
                <button className='btn' id='increase-button' onClick={() => setCount(count+1)}>Increment</button>
                <button className='btn' id='decrease-buton' onClick={() => setCount(count-1)} disabled={count===0}>Decrement</button>
                <button className='btn' id='reset-button' onClick={() => setCount(0)}>Reset</button>    
            </button>
            
        </div>
      
    </div>
  )
}

export default App