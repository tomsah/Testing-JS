import React from 'react'
//for testing server side rendering we have to use the
//ReactDOMServer to be able to use renderToString
import ReactDOMServer from 'react-dom/server'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  ReactDOMServer.renderToString(<AutoScalingText />)
})
