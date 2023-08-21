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
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{text}</p>
          {showButton && (
            <Shake>
              {' '}
              <Link href="/#">Showroom</Link>
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
