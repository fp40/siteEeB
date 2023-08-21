import styles from './styles.module.scss'
import iconWhats from '../../../public/images/whatsapp-icon.png'
import Image from 'next/image'
import Shake from 'react-reveal/Shake'
import Link from 'next/link'

const BtnWhats = () => {
  return (
    <div className={styles.container}>
      <Shake>
        <Link
          href={
            'https://api.whatsapp.com/send/?phone=5551991725243&text&type=phone_number&app_absent=0'
          }
        >
          <button className={styles.btn}>
            <Image src={iconWhats} alt="icone whatsapp" />
            OU ENTRE EM CONTATO PELO WHATS
          </button>
        </Link>
      </Shake>
    </div>
  )
}

export default BtnWhats
