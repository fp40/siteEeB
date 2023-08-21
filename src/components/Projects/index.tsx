import React, { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ProjectProps {
  children: ReactNode
}

const Projects = ({ children }: ProjectProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>CONFIRA NOSSOS PROJETOS</p>
      {children}
    </div>
  )
}

export default Projects
