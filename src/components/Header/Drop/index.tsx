import styles from './styles.module.scss'
import Link from 'next/link'

const Drop = () => {
  return (
    <li className={styles.dropdown}>
      <button className={styles.dropbtn}>Serviços</button>
      <ul className={styles.dropdownContent}>
        <li>
          <Link href="/esquadrias-de-pvc">Esquadrias de PVC</Link>
        </li>
        <hr />
        <li>
          <Link href="/moveis">Móveis Planejados</Link>
        </li>
        <hr />
        <li>
          <Link href="/portas-internas">Portas Internas</Link>
        </li>
        <hr className={styles.line} />
        <li>
          <Link href="/portas-pivotantes">Portas Pivotantes</Link>
        </li>
        <hr className={styles.line} />
        <li>
          <Link href="/complementos-em-madeira">Complementos Em Madeira</Link>
        </li>
      </ul>
    </li>
  )
}

export default Drop
