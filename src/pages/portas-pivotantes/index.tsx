import PresentationSingle from '../../components/PresentationSingle'
import Content from '../../components/Content'
import ImageContent from '../../../public/images/pivotantesContent.png'
import Head from 'next/head'
import styles from './styles.module.scss'

import Benefits from '../../components/Benefits'

import Projects from '../../components/Projects'
import Thumbnail from '../../components/Thumnail'

import durabilidade from '../../../public/images/durabilidade.png'
import logoPersonalizar from '../../../public/images/personalizarR.png'
import insulation from '../../../public/images/insulation.png'
import valorizacao from '../../../public/images/valorizacao.png'
import suave from '../../../public/images/suave.png'

import pv1 from '../../../public//images/pv1.jpg'
import pv2 from '../../../public//images/pv2.jpg'
import pv3 from '../../../public//images/pv3.jpg'
import pv4 from '../../../public//images/pv4.jpg'

export default function PivotantesPage() {
  return (
    <>
      <Head>
        <title>Portas Pivotantes</title>
      </Head>
      <PresentationSingle title="Portas Pivotantes" />
      <Content
        title={'PORTAS PIVOTANTES'}
        text={
          'Destacando-se em nosso catálogo, temos as portas pivotantes em madeira, que são verdadeiras obras de arte. Elas oferecem uma abertura suave e imponente, trazendo um toque de luxo e requinte aos ambientes. Cada porta é fabricada com maestria, utilizando madeiras nobres e técnicas de construção cuidadosas, resultando em peças únicas e impressionantes.'
        }
        contentImage={ImageContent}
        showButton
      />

      <Benefits
        text="A madeira é conhecida por sua durabilidade e resistência. As portas pivotantes em madeira são fabricadas com materiais de alta qualidade e submetidas a técnicas de construção precisas, garantindo que elas se mantenham em ótimas condições ao longo do tempo, mesmo com o uso diário."
        textButton="Durabilidade e Resistência"
        image={durabilidade}
        backgroundColor="#FFFEE0"
      />
      <Benefits
        text="A madeira é um excelente isolante térmico e acústico natural. As portas pivotantes em madeira oferecem um bom isolamento, mantendo a temperatura interna e reduzindo a transmissão de ruídos externos, proporcionando um ambiente mais confortável e tranquilo."
        textButton="Isolamento térmico e acústico"
        image={insulation}
        backgroundColor="#D0D0D0"
      />
      <Benefits
        text="As portas pivotantes em madeira podem ser personalizadas de acordo com as preferências e necessidades de cada cliente. É possível escolher entre diferentes tipos de madeira, acabamentos e detalhes, permitindo a criação de portas únicas e exclusivas que se harmonizam perfeitamente com a estética desejada."
        textButton="Design personalizado"
        image={logoPersonalizar}
        backgroundColor="#FFFEE0"
      />
      <Benefits
        text="As portas pivotantes oferecem uma abertura suave e imponente, criando uma experiência elegante ao entrar ou sair de um ambiente. Sua singularidade e movimento pivotante conferem um toque de sofisticação aos espaços."
        textButton="Valorização do imóvel"
        image={valorizacao}
        backgroundColor="#D0D0D0"
      />
      <Benefits
        text="A instalação de portas pivotantes pode contribuir para a valorização do imóvel. Essas portas conferem um aspecto de luxo e exclusividade, tornando-se um diferencial em termos de design e estética. Sua presença agrega valor ao imóvel, aumentando seu apelo no mercado."
        textButton="Abertura suave e imponente"
        image={suave}
        backgroundColor="#FFFEE0"
      />
      <Projects>
        <div className={styles.row}>
          <Thumbnail
            imageUrl={pv1}
            width={600}
            height={900}
            minWidth={188}
            minHeight={300}
          />
          <Thumbnail
            imageUrl={pv2}
            width={600}
            height={900}
            minWidth={188}
            minHeight={300}
          />
          <Thumbnail
            imageUrl={pv3}
            width={600}
            height={900}
            minWidth={188}
            minHeight={300}
          />
          <Thumbnail
            imageUrl={pv4}
            width={600}
            height={900}
            minWidth={188}
            minHeight={300}
          />
        </div>
      </Projects>
    </>
  )
}
