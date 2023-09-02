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
            <h2 className={styles.subtitle}>
              Esquadrias de pvc, móveis planejados, portas internas, portas
              pivotantes e complementos em madeira em Capão da Canoa
            </h2>
            <h3 className={styles.orcText}>Solicite seu Orçamento</h3>
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
