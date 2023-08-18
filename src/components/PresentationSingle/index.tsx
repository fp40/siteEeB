import styles from './styles.module.scss'
import AnimatedDiv from '../AnimatedDiv'
import React from 'react'

interface PresentationProps {
  title: string
}

const PresentationSingle: React.FC<PresentationProps> = ({ title }) => {
  return (
    <>
      <div className={styles.imagem}>
        <AnimatedDiv>
          <div className={styles.content}>
            <div>
              <h1 className={styles.title}>{title}</h1>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </>
  )
}

export default PresentationSingle
