import styles from './styles.module.scss'
import iconWhats from '../../../public/images/whatsapp-icon.png'
import Image from 'next/image'
import Shake from 'react-reveal/Shake'

const BtnWhats = () => {
  return (
    <div className={styles.container}>
      <Shake>
        <button className={styles.btn}>
          <Image src={iconWhats} alt="icone whatsapp" />
          OU ENTRE EM CONTATO PELO WHATS
        </button>
      </Shake>
    </div>
  )
}

export default BtnWhats
