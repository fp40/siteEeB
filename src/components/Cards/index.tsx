import styles from './styles.module.scss'
import Card from './Card'
import PvcImage from '../../../public//images/PvcCard.jpg'
import MoveisImage from '../../../public//images/MoveisCard.png'
import PivotantesImage from '../../../public//images/PivotantesCard.jpg'
import MadeiraImage from '../../../public/images/MadeiraCard.jpg'
import InternasImage from '../../../public//images/InternasCards.jpg'
import HeadShake from 'react-reveal/HeadShake'

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <HeadShake>
          <Card title="Esquadrias de PVC" image={PvcImage} link="/pvc" />
        </HeadShake>
        <HeadShake>
          <Card title="Móveis Planejados" image={MoveisImage} link="#" />
        </HeadShake>
        <HeadShake>
          <Card title="Portas Pivotantes" image={PivotantesImage} link="#" />
        </HeadShake>
      </div>
      <div className={styles.cards}>
        <HeadShake>
          <Card title="Complementos em Madeira" image={MadeiraImage} link="#" />
        </HeadShake>
        <HeadShake>
          <Card title="Portas Internas" image={InternasImage} link="#" />
        </HeadShake>
      </div>
    </div>
  )
}

export default Cards
