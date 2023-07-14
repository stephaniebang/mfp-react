import React, { useState } from 'react';

export default function Button () {
  const [count, setCount] = useState(0);

  return (
    <div className="mcf-counter" style={{ background: 'red' }}>
      <h3>
        Functional component mounted into DOM
      </h3>

      <span>Counter: {count}</span>

      <button
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};
