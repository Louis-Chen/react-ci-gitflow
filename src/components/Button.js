import React, { useState } from 'react'

export const Button = () => {
  const [num, setNum] = useState(0)
  const increment = num => setNum(num + 1)
  const decrement = num => setNum(num - 1)

  return (
    <div>
      <h1 data-testid='num'>{num}</h1>
      <div style={{ display: 'inlineBlock' }}>
        <button data-testid='decrement' onClick={() => decrement(num)}>
          -
        </button>
        <button data-testid='increment' onClick={() => increment(num)}>
          +
        </button>
      </div>
    </div>
  )
}
