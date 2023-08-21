import React, { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

interface ThumbnailProps {
  imageUrl: any
  width: number
  height: number
  minWidth: number
  minHeight: number
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  imageUrl,
  width,
  height,
  minHeight,
  minWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleImage = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className={styles.thumbnail} onClick={toggleImage}>
        <Image
          src={imageUrl}
          alt="PVC Project"
          priority={false}
          quality={50}
          width={minWidth}
          height={minHeight}
        />
      </div>
      {isOpen && (
        <div className={styles.modal} onClick={toggleImage}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleImage}>
              &times;
            </span>
            <Image
              src={imageUrl}
              alt="PVC Project"
              priority={false}
              width={width}
              height={height}
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Thumbnail
