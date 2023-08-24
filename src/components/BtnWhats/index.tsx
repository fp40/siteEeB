import styles from './styles.module.scss'
import iconWhats from '../../../public/images/whatsapp-icon.png'
import Image from 'next/image'
import Shake from 'react-reveal/Shake'
import Link from 'next/link'

interface BtnProps {
  title: string
  link: string
}

const BtnWhats: React.FC<BtnProps> = ({ title, link }) => {
  return (
    <div className={styles.container}>
      <Shake>
        <Link href={link}>
          <button className={styles.btn}>
            <Image src={iconWhats} alt="icone whatsapp" />
            {title}
          </button>
        </Link>
      </Shake>
    </div>
  )
}

export default BtnWhats
