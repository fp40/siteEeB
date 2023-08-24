import styles from './styles.module.scss'
import Image from 'next/image'
import Shake from 'react-reveal/Shake'

interface BenefitsProps {
  image: any
  textButton: string
  text: string
  backgroundColor: string
}

const Benefits: React.FC<BenefitsProps> = ({
  image,
  textButton,
  text,
  backgroundColor,
}) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor,
      }}
    >
      <Shake>
        <Image
          src={image}
          alt="benefits logo"
          priority={false}
          width={300}
          height={300}
        />
      </Shake>

      <div className={styles.content}>
        <button>{textButton}</button>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Benefits
