import React, { useEffect, useState } from 'react'
import './styles.module.scss'

interface AnimatedDivProps {
  children: React.ReactNode
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children }) => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (opacity < 1) {
        setOpacity((prevOpacity) => prevOpacity + 0.015)
      } else {
        clearInterval(interval)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [opacity])

  return (
    <div className="animated-div" style={{ opacity }}>
      {children}
    </div>
  )
}

export default AnimatedDiv
