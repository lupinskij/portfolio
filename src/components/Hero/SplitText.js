import React from 'react'
import { motion } from 'framer-motion'

export function SplitText({ children, ...rest }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <div
        key={children + i}
        style={{
          display: 'inline-block',
          marginTop: '-2rem',
          overflow: 'hidden',
          perspective: 1000,
        }}
      >
        <motion.div
          {...rest}
          style={{
            display: 'inline-block',
            transformOrigin: 'left top',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
          custom={i}
          className="txt ws-pre"
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.div>
      </div>
    )
  })
}
