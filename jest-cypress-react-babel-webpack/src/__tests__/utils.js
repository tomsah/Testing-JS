import {getFormattedValue} from 'utils'

test('formats the value', () => {
  expect(getFormattedValue('123.0')).toBe('1,234.0')
})
