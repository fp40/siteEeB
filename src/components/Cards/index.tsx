import styles from './styles.module.scss'
import Card from './Card'
import PvcImage from '../../../public//images/PvcCard.jpg'
import MoveisImage from '../../../public//images/MoveisCard.png'
import PivotantesImage from '../../../public//images/PivotantesCard.jpg'
import MadeiraImage from '../../../public/images/MadeiraContent.jpg'
import InternasImage from '../../../public//images/InternasCards.jpg'
import HeadShake from 'react-reveal/HeadShake'

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <HeadShake>
          <Card title="Esquadrias de PVC" image={PvcImage} link="/esquadrias-de-pvc" />
        </HeadShake>
        <HeadShake>
          <Card title="Móveis Planejados" image={MoveisImage} link="/moveis" />
        </HeadShake>
        <HeadShake>
          <Card
            title="Portas Pivotantes"
            image={PivotantesImage}
            link="/portas-pivotantes"
          />
        </HeadShake>
      </div>
      <div className={styles.cards}>
        <HeadShake>
          <Card
            title="Complementos em Madeira"
            image={MadeiraImage}
            link="/complementos-em-madeira"
          />
        </HeadShake>
        <HeadShake>
          <Card
            title="Portas Internas"
            image={InternasImage}
            link="/portas-internas"
          />
        </HeadShake>
      </div>
    </div>
  )
}

export default Cards
