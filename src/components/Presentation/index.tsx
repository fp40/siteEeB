import styles from './styles.module.scss'
import AnimatedDiv from '../AnimatedDiv'
import Link from 'next/link'

const Presentation = () => {
  return (
    <div className={styles.imagem}>
      <AnimatedDiv>
        <div className={styles.content}>
          <div>
            <h1 className={styles.title}>Elibio e Bianchini</h1>
            <p className={styles.subtitle}>
              Esquadrias de pvc, móveis planejados, portas internas, portas
              pivotantes e complementos em madeira na cidade de Capão da Canoa
            </p>
            <p className={styles.orcText}>Solicite seu Orçamento</p>
            <a href="#contato">
              <button className={styles.customBtn}>Gratuito</button>
            </a>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  )
}

export default Presentation
