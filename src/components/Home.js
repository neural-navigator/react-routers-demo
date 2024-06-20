import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Homepage
      <button onClick={() => navigate('order-summary', {replace: true})}>Place Order!</button>
    </div>
  )
}

export default Home
