import React  from 'react'
import {render} from 'calculator-test-utils'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  // debug example
  // const { debug } = render(<AutoScalingText />)
  // console.log(debug())
  const comp = render(<AutoScalingText />)
  expect(comp).toBeTruthy()
})
