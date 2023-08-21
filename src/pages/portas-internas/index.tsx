import PresentationSingle from '../../components/PresentationSingle'
import Content from '../../components/Content'
import ImageContent from '../../../public/images/InternasContent.jpg'
import Head from 'next/head'
import styles from './styles.module.scss'

import Benefits from '../../components/Benefits'

import Projects from '../../components/Projects'
import Thumbnail from '../../components/Thumnail'

import durabilidade from '../../../public/images/durabilidade.png'
import entrega from '../../../public/images/entrega.png'
import antiruido from '../../../public/images/antiruido.png'
import instalacao from '../../../public/images/instalação.png'
import satisfacao from '../../../public/images/satisfação.png'

import pi1 from '../../../public//images/pi1.jpg'
import pi2 from '../../../public//images/pi2.jpg'
import pi3 from '../../../public//images/pi3.jpg'
import pi4 from '../../../public//images/pi4.jpg'

export default function InternasPage() {
  return (
    <>
      <Head>
        <title>Portas Internas</title>
      </Head>
      <PresentationSingle title="Portas Internas" />
      <Content
        title={'PORTAS INTERNAS'}
        text={
          'Além disso, nossa empresa oferece uma ampla variedade de portas internas que combinam harmoniosamente estética e funcionalidade. Com opções para todos os estilos de decoração, desde moderno e minimalista até clássico e sofisticado, nossas portas internas são projetadas para proporcionar não apenas privacidade, mas também um toque de elegância aos espaços internos. Cada porta é cuidadosamente elaborada, utilizando materiais de alta qualidade e técnicas de fabricação precisas, garantindo durabilidade e um acabamento impecável. Seja para residências, escritórios ou qualquer outro ambiente, nossas portas internas são a escolha perfeita para criar uma atmosfera sofisticada e acolhedora.'
        }
        contentImage={ImageContent}
        showButton
      />

      <Benefits
        text="Nossas portas internas são projetadas para oferecer privacidade e isolamento acústico adequados. Com materiais de qualidade e técnicas de fabricação precisas, garantimos que nossas portas minimizem a transmissão de ruídos indesejados, proporcionando ambientes mais tranquilos e confortáveis."
        textButton="Isolamento acústico"
        image={antiruido}
        backgroundColor="#FFFEE0"
      />
      <Benefits
        text="Nossa empresa possui uma equipe dedicada de profissionais experientes e qualificados, que cuidam tanto da entrega quanto da instalação das portas internas. Com a nossa entrega e instalação própria, garantimos que suas portas sejam manuseadas com o devido cuidado e instaladas de forma adequada, resultando em uma experiência tranquila e sem complicações para você."
        textButton="Entrega e instalação"
        image={entrega}
        backgroundColor="#D0D0D0"
      />
      <Benefits
        text="Nossa equipe se preocupa com cada detalhe durante o processo de instalação das portas internas. Nossos profissionais experientes utilizam técnicas de instalação precisas e seguem padrões de qualidade rigorosos para garantir que as portas se encaixem perfeitamente nos batentes, proporcionando um funcionamento suave e duradouro."
        textButton="Excelência na instalação"
        image={instalacao}
        backgroundColor="#FFFEE0"
      />
      <Benefits
        text="Valorizamos a durabilidade e a resistência das nossas portas internas. Utilizamos materiais de alta qualidade e técnicas de fabricação avançadas para garantir que nossas portas sejam duráveis e capazes de resistir ao uso diário, mantendo sua integridade e beleza ao longo do tempo."
        textButton="Durabilidade e Resistência"
        image={durabilidade}
        backgroundColor="#D0D0D0"
      />
      <Benefits
        text="Estamos comprometidos em alcançar a satisfação total dos nossos clientes. Além da entrega e instalação de qualidade, oferecemos uma garantia de satisfação para as nossas portas internas. Se, por algum motivo, você não estiver completamente satisfeito com a sua porta, faremos o possível para resolver a situação e garantir a sua plena satisfação."
        textButton="Garantia de satisfação"
        image={satisfacao}
        backgroundColor="#FFFEE0"
      />
      <Projects>
        <div className={styles.row}>
          <Thumbnail
            imageUrl={pi1}
            width={600}
            height={1000}
            minWidth={188}
            minHeight={350}
          />
          <Thumbnail
            imageUrl={pi2}
            width={600}
            height={1000}
            minWidth={188}
            minHeight={350}
          />
          <Thumbnail
            imageUrl={pi3}
            width={600}
            height={1000}
            minWidth={188}
            minHeight={350}
          />
          <Thumbnail
            imageUrl={pi4}
            width={600}
            height={1000}
            minWidth={188}
            minHeight={350}
          />
        </div>
      </Projects>
    </>
  )
}
