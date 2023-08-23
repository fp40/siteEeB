import PresentationSingle from '../../components/PresentationSingle'
import Content from '../../components/Content'
import ImageContent from '../../../public/images/moveisContent.png'
import Head from 'next/head'
import styles from './styles.module.scss'

import Benefits from '../../components/Benefits'
import logoPersonalizar from '../../../public/images/personalizarR.png'
import Projects from '../../components/Projects'
import Thumbnail from '../../components/Thumnail'

import design from '../../../public/images/design.png'
import durabilidade from '../../../public/images/durabilidade.png'
import entrega from '../../../public/images/entrega.png'

import mv1 from '../../../public/images/mv1.jpeg'
import mv2 from '../../../public/images/mv2.jpeg'
import mv3 from '../../../public/images/mv3.jpeg'

export default function MoveisPage() {
  return (
    <>
      <Head>
        <title>Móveis Planejados</title>
      </Head>
      <PresentationSingle title="Móveis Planejados" />
      <Content
        title={'MÓVEIS PLANEJADOS'}
        text={
          'Na nossa empresa, acreditamos que cada cliente é único, e por isso nossos móveis sob medida são cuidadosamente projetados para atender às necessidades e estilo de vida individuais. Utilizando tecnologia avançada, oferecemos um serviço exclusivo de criação de projetos em 3D para os nossos clientes. Ao escolher nossos móveis sob medida, você terá a oportunidade de visualizar o projeto em um ambiente virtual antes mesmo da produção. Nossa equipe especializada utiliza softwares de design de última geração para criar uma representação tridimensional do seu espaço, permitindo que você visualize o layout, a distribuição dos móveis e os detalhes de design de forma precisa.Nossa equipe está comprometida em trabalhar em estreita colaboração com você, entendendo suas necessidades, preferências e restrições do espaço. Através do projeto em 3D, podemos explorar diferentes possibilidades, ajustar os detalhes conforme suas orientações e garantir que o resultado final seja exatamente como você imaginou.'
        }
        contentImage={ImageContent}
        showButton
      />

      <Benefits
        text="Nossos móveis sob medida oferecem a possibilidade de personalização completa, permitindo que cada peça seja adaptada às preferências e necessidades específicas de cada cliente. Desde o tamanho, formato, materiais, acabamentos até os detalhes de design, tudo é pensado para criar móveis exclusivos que se encaixam perfeitamente no ambiente."
        textButton="Personalização Completa"
        image={logoPersonalizar}
        backgroundColor="#FFFEE0"
      />
      <Benefits
        text="Valorizamos a individualidade e a expressão do estilo pessoal de cada cliente. Com nossos móveis sob medida, é possível escolher entre uma ampla variedade de estilos, materiais e acabamentos para criar peças únicas que reflitam a estética desejada. Juntamente com a nossa equipe que entrega a experiência 3D para você."
        textButton="Orçamento 3D"
        image={design}
        backgroundColor="#D0D0D0"
      />
      <Benefits
        text="Nosso compromisso com a excelência nos leva a utilizar apenas materiais de alta qualidade e a empregar técnicas de fabricação meticulosas. Isso garante a durabilidade e resistência dos nossos móveis, proporcionando peças que resistem ao uso diário e mantêm sua beleza e funcionalidade ao longo do tempo."
        textButton="Durabilidade e Qualidade"
        image={durabilidade}
        backgroundColor="#FFFEE0"
      />
      <Benefits
        text="Contamos com uma equipe de profissionais experientes e qualificados, dedicados a garantir que os móveis sejam entregues e instalados com o mais alto padrão de qualidade. Nossa equipe se preocupa com cada detalhe, garantindo que os móveis sejam montados de forma precisa e segura, para que você possa desfrutar plenamente dos benefícios e funcionalidade dos seus móveis sob medida desde o primeiro momento."
        textButton="Entrega e Instalação"
        image={entrega}
        backgroundColor="#D0D0D0"
      />
      <Projects>
        <div className={styles.row}>
          <Thumbnail
            imageUrl={mv1}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
          <Thumbnail
            imageUrl={mv2}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
          <Thumbnail
            imageUrl={mv3}
            width={900}
            height={600}
            minWidth={300}
            minHeight={222}
          />
        </div>
      </Projects>
    </>
  )
}
