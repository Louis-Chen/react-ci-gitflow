import React from 'react'
import { Counter } from '../components/Counter'
import { render } from '@testing-library/react'

test('測試 Counter　數字有沒有問題', () => {
  const { getByTestId } = render(<Counter number={30} />)
  expect(getByTestId('number').textContent).toBe('Number :50')
})
