import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSummary() {
    const navigate = useNavigate();

  return (
    <div>
      Order Confirmed!
       {/* -1 represents one step back in navigation */}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default OrderSummary
