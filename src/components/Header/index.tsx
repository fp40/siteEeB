import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import instaLogo from '../../../public/images/new-Instagram-logo-white-glyph.png'
import whatsLogo from '../../../public/images/whatsapp-icon.png'
import Drop from './Drop'

import Link from 'next/link'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a>
          <Image src={logo} alt="Logo Elibio e Bianchini" />
        </a>

        <nav>
          <Link type="a" href="/">
            Home
          </Link>
          <Link type="a" href="/#contato">
            Contato
          </Link>
          <Drop />
        </nav>

        <div className={styles.logosHeader}>
          <a href="https://www.instagram.com/elibioebianchiniltda/">
            <Image src={instaLogo} alt="Logo instagram" />
          </a>
          <a>
            <Image src={whatsLogo} alt="Logo whatsapp" />
          </a>
        </div>
      </div>
    </header>
  )
}
