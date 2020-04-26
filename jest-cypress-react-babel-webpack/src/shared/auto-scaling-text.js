import React from 'react'
import PropTypes from 'prop-types'
import styles from './auto-scaling-text.module.css'

function getScale(node) {
  // we have set jest to be able to open our browser inspector
  // and debug or test, just uncomment the debugger to check it
  // debugger
  if (!node) {
    return 1
  }
  const parentNode = node.parentNode

  const availableWidth = parentNode.offsetWidth
  const actualWidth = node.offsetWidth
  const actualScale = availableWidth / actualWidth

  if (actualScale < 1) {
    return actualScale * 0.9
  }
  return 1
}

function AutoScalingText({children}) {
  const nodeRef = React.useRef()
  const scale = getScale(nodeRef.current)
  return (
    <div
      className={styles.autoScalingText}
      style={{transform: `scale(${scale},${scale})`}}
      ref={nodeRef}
      data-testid="total"
    >
      {children}
    </div>
  )
}
AutoScalingText.propTypes = {
  children: PropTypes.node,
}

export default AutoScalingText
