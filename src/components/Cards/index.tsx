import styles from './styles.module.scss'
import Card from './Card'
import PvcImage from '../../../public//images/PvcCard.jpg'
import MoveisImage from '../../../public//images/MoveisCard.png'
import PivotantesImage from '../../../public//images/PivotantesCard.jpg'
import MadeiraImage from '../../../public/images/MadeiraCard.jpg'
import InternasImage from '../../../public//images/InternasCards.jpg'

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Card title="Esquadrias de PVC" image={PvcImage} link="/pvc" />
        <Card title="Móveis Planejados" image={MoveisImage} link="#" />
        <Card title="Portas Pivotantes" image={PivotantesImage} link="#" />
      </div>
      <div className={styles.cards}>
        <Card title="Complementos em Madeira" image={MadeiraImage} link="#" />
        <Card title="Portas Internas" image={InternasImage} link="#" />
      </div>
    </div>
  )
}

export default Cards
