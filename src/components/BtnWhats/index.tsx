import styles from './styles.module.scss'
import iconWhats from '../../../public/images/whatsapp-icon.png'
import Image from 'next/image'

const BtnWhats = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <Image src={iconWhats} alt="icone whatsapp" />
        OU ENTRE EM CONTATO PELO WHATS
      </button>
    </div>
  )
}

export default BtnWhats
