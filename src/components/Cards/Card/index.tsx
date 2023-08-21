import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  image: any
  link: string
}

const Card: React.FC<CardProps> = ({ title, image, link }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <Image
        priority={false}
        src={image}
        alt="Img Card"
        width={290}
        height={290}
      />
      <Link href={link}>
        <button>Saiba Mais</button>
      </Link>
    </div>
  )
}

export default Card
