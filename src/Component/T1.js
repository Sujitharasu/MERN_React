import React, { useState } from 'react'
import './T1.css'

const T1 = () => {
  const [value, setValue] = useState(1);

  function Decrement() {
    setValue(prevValue => prevValue - 1);
  }

  function Increment() {
    setValue(prevValue => prevValue + 1);
  }

  const arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className='s4' style={{marginLeft:"550px"}}>
        {arr.map((item, index) => {
          const bgColor = value === index + 1 ? 'green' : 'white';
          return (
            <div key={index} className='s5' style={{ backgroundColor: bgColor }}>
              {item}
            </div>
          );
        })}
      </div>
      <h1>Step {value}</h1>
      <h2>You are Learning React</h2>
      <button className='s3'>Learn How</button>
      <div className='s2'>
        <button className='s1' onClick={Decrement}>Prev Step</button>
        <button className='s1' onClick={Increment}>Next Step</button>
      </div>
    </div>
  )
}

export default T1;