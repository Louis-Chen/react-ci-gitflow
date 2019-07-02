import React from 'react'
import { fireEvent, render, cleanup } from '@testing-library/react'

import { Button } from '../components/Button'

describe('測試項目 Button', () => {
  const { getByTestId, container } = render(<Button />)
  test('測試數字是否正常', () => {
    expect(getByTestId('num').textContent).toBe('0')
  })

  test('增加按鈕是否正常', () => {
    let addButton = getByTestId('increment')
    fireEvent.click(addButton)
    expect(getByTestId('num').textContent).toBe('1')
  })

  test('減少按鈕是否正常', () => {
    let deButton = getByTestId('decrement')
    fireEvent.click(deButton)
    expect(getByTestId('num').textContent).toBe('0')
  })
})
