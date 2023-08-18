import PresentationSingle from '../../components/PresentationSingle'
import Content from '../../components/Content'
import ImageContent from '../../../public/images/PvcContent.jpg'
import Head from 'next/head'
import styles from './styles.module.scss'
import logoGarantia from '../../../public/images/vecteezy_warranty-icon-transpare.png'
import Image from 'next/image'
import like from '../../../public/images/like.png'
import dlike from '../../../public/images/dlike.png'

export default function PvcPage() {
  return (
    <>
      <Head>
        <title>Esquadrias de PVC</title>
      </Head>
      <PresentationSingle title="Esquadrias de PVC" />
      <Content
        title={'Esquadrias de PVC'}
        text={
          'As nossas esquadrias de PVC são produzidas com materiais de primeira linha, garantindo resistência, isolamento térmico e acústico, além de proporcionarem um design moderno e elegante. A resistência das esquadrias de PVC é uma de suas principais características. Elas são projetadas para suportar as condições climáticas adversas, como umidade, variações de temperatura e exposição solar, sem sofrer deterioração. Dessa forma, as esquadrias de PVC mantêm sua aparência e funcionalidade ao longo do tempo, exigindo pouca manutenção. A variedade de designs e acabamentos disponíveis para as esquadrias de PVC permite que sejam adaptadas a diferentes estilos arquitetônicos e preferências estéticas. Com uma ampla seleção de cores, texturas e estilos, as esquadrias de PVC podem complementar a estética de qualquer projeto de construção. As esquadrias de PVC são uma escolha popular para quem busca durabilidade, eficiência energética, isolamento térmico e acústico, variedade de design e facilidade de manutenção em seus projetos de construção.'
        }
        contentImage={ImageContent}
        showButton
      />
      <div className={styles.container}>
        <div className={styles.garantia}>
          <div className={styles.selo}>
            <Image
              src={logoGarantia}
              alt="Garantia"
              quality={75}
              priority={false}
            />{' '}
            <p className={styles.title}>GARANTIA DE 10 ANOS</p>
          </div>
          <div>
            <p className={styles.text}>
              Nossa garantia de 10 anos se aplica exclusivamente aos perfis de
              PVC utilizados em nossas esquadrias, assegurando que eles
              mantenham sua coloração original ao longo do tempo. Estamos
              comprometidos em fornecer perfis de PVC de alta qualidade, que
              sejam resistentes ao amarelamento, mantendo sua aparência
              estética. Caso ocorra qualquer alteração indesejada na coloração
              dos perfis de PVC durante o período de garantia, estaremos prontos
              para tomar as medidas necessárias, seja por meio de reparo ou
              substituição do perfil afetado. Nossa garantia de 10 anos
              demonstra nosso compromisso em oferecer perfis de PVC duráveis,
              que proporcionam satisfação e confiança aos nossos clientes,
              garantindo que suas esquadrias mantenham uma aparência impecável
              ao longo do tempo.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.containerComp}>
        <p className={styles.compTitle}>COMPARATIVO DE MATERIAIS</p>
        <div className={styles.Comp}>
          <div className={styles.col1}>
            <p>VEDAÇÃO</p>
            <p>SEGURANÇA</p>
            <p>DURABILIDADE</p>
            <p>ESTÉTICA</p>

            <p>ISOLAMENTO TÉRMICO</p>
            <p>ISOLAMENTO ACÚSTICO</p>
            <p>EFICIÊNCIA TÉRMICA</p>
          </div>
          <div className={styles.col}>
            <p>PVC</p>
            <Image src={like} alt="like" quality={100} priority={false} />
            <Image src={like} alt="like" quality={100} priority={false} />
            <Image src={like} alt="like" quality={100} priority={false} />
            <Image src={like} alt="like" quality={100} priority={false} />
            <Image
              src={like}
              alt="like"
              quality={100}
              priority={false}
              id={styles.lgtop}
            />
            <Image
              src={like}
              alt="like"
              quality={100}
              priority={false}
              id={styles.lgtop}
            />
            <Image
              src={like}
              alt="like"
              quality={100}
              priority={false}
              id={styles.lgtop}
            />
          </div>
          <div className={styles.col}>
            <p>ALUMÍNIO</p>
            <Image src={dlike} alt="like" quality={100} priority={false} />
            <Image src={dlike} alt="like" quality={100} priority={false} />
            <Image src={like} alt="like" quality={100} priority={false} />
            <Image src={dlike} alt="like" quality={100} priority={false} />
            <Image
              src={dlike}
              alt="like"
              quality={100}
              priority={false}
              id={styles.lgtop}
            />
            <Image
              src={dlike}
              alt="like"
              quality={100}
              priority={false}
              id={styles.lgtop}
            />
            <Image
              src={dlike}
              alt="like"
              quality={100}
              priority={false}
              id={styles.lgtop}
            />
          </div>
          <div className={styles.col}>
            <p>VIDRO</p>
            <Image src={dlike} alt="like" quality={100} priority={false} />
            <Image src={dlike} alt="like" quality={100} priority={false} />
            <Image src={like} alt="like" quality={100} priority={false} />
            <Image src={dlike} alt="like" quality={100} priority={false} />
            <Image
              src={dlike}
              alt="like"
              quality={100}
              priority={false}
              id={styles.lgtop}
            />
            <Image
              src={dlike}
              alt="like"
              quality={100}
              priority={false}
              id={styles.lgtop}
            />
            <Image
              src={dlike}
              alt="like"
              quality={100}
              priority={false}
              id={styles.lgtop}
            />
          </div>
        </div>
      </div>
    </>
  )
}
