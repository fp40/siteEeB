import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Shake from 'react-reveal/Shake'

interface ContentProps {
  title: string
  text: string
  contentImage: any
  showButton?: boolean
}

const Content: React.FC<ContentProps> = ({
  title,
  text,
  contentImage,
  showButton = false,
}) => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.text}>{text}</h3>
          {showButton && (
            <Shake>
              {' '}
              <Link href="#projetos">Showroom</Link>
            </Shake>
          )}
        </div>
      </div>
      <div className={styles.image}>
        <Image src={contentImage} alt="Content Image" quality={100} />
      </div>
    </div>
  )
}

export default Content
