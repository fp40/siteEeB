import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo-EeB-preta .png'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.footerStart}>
          <p>Contatos</p>
          <br />
          <Link href="/#">(51) 99172-5243</Link>
          <br />
          <Link href="/#">(51) 99392-7457</Link>
        </div>
        <div className={styles.footerCenter}>
          <p>
            Elibio e Bianchini <br /> CNPJ: 19.615.686/0001-53 <br /> Rua Santa
            Elizabete, 1513 - Santa Luzia, Capão da Canoa - RS, 95555-000,
            Brasil
          </p>
        </div>
        <div className={styles.logo}>
          <Image
            quality={1}
            src={logo}
            alt="Logo Eibio e Bianchini"
            priority={false}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
