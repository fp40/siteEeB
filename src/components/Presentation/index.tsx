import styles from './styles.module.scss'
import AnimatedDiv from '../AnimatedDiv'

const Presentation = () => {
  return (
    <div className={styles.imagem}>
      <AnimatedDiv>
        <div className={styles.content}>
          <div>
            <h1 className={styles.title}>Elibio e Bianchini</h1>
            <h2 className={styles.subtitle}>
              Esquadrias em pvc, móveis planejados, portas internas, portas
              pivotantes e complementos em madeira
            </h2>
            <h3 className={styles.orcText}>Solicite seu Orçamento</h3>
            <a href="/#">
              <button className={styles.customBtn}>Gratuito</button>
            </a>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  )
}

export default Presentation
