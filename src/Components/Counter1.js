import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
  const [Product, setProduct] = useState(0);

  const increment = () => setProduct(Product + 1);
  const decrement = () => setProduct(Product - 1);
  const reset = () => setProduct(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProduct(Product + 1);
    }, 100);
  }, [Product]);

  return (
     <div className='container border my-5 text-center p-5'>
      <h1>{Product}</h1>
      <button className='btn btn-outline-primary mx-2' onClick={increment}>+Cart</button>
      <button className='btn btn-outline-danger mx-2' onClick={decrement} disabled={Product === 0}>-Cart</button>
      <button className='btn btn-outline-warning mx-2' onClick={reset}>Reset</button>
     {/* <button onClick={() => setProduct(Product + 1)}>+Cart</button> */}
      {/* <button onClick={() => setProduct(Product - 1)} disabled={Product === 0}>-Cart</button> */}
      {/* <button onClick={() => setProduct(0)}>Reset</button> */}

    </div>
  );
}

export default Counter;
