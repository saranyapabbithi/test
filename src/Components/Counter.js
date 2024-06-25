import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
  const [Data, setData] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json)); 
  }, []);

  return (
    <div>
      <div className='count'>
      {Data.map(item => <li>{item.title}</li>)}
      </div>
    </div>
  );
}

export default Counter;
