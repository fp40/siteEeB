import styles from './styles.module.scss'
import Link from 'next/link'

const Drop = () => {
  return (
    <li className={styles.dropdown}>
      <button className={styles.dropbtn}>Serviços</button>
      <ul className={styles.dropdownContent}>
        <li>
          <Link href="/pvc">Esquadrias de PVC</Link>
        </li>
        <hr />
        <li>
          <Link href="#">Móveis Planejados</Link>
        </li>
        <hr />
        <li>
          <Link href="#">Portas Internas</Link>
        </li>
        <hr className={styles.line} />
        <li>
          <Link href="#">Portas Pivotantes</Link>
        </li>
        <hr className={styles.line} />
        <li>
          <Link href="#">Complementos Em Madeira</Link>
        </li>
      </ul>
    </li>
  )
}

export default Drop
