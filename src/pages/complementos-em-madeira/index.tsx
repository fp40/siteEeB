import PresentationSingle from '../../components/PresentationSingle'
import Content from '../../components/Content'
import ImageContent from '../../../public/images/MadeiraContent.jpg'
import Head from 'next/head'
import styles from './styles.module.scss'

import Benefits from '../../components/Benefits'
import logoPersonalizar from '../../../public/images/personalizarR.png'
import Projects from '../../components/Projects'
import Thumbnail from '../../components/Thumnail'

import martelosCruzado from '../../../public/images/martelos-cruzados.png'
import durabilidade from '../../../public/images/durabilidade.png'
import entrega from '../../../public/images/entrega.png'
import lareira from '../../../public/images/lareira.png'

import m1 from '../../../public//images/IMG_20220830_155453.jpg'
import m2 from '../../../public//images/m1.jpg'
import m3 from '../../../public//images/m2.jpg'
import m4 from '../../../public//images/m3.jpg'

export default function MadeiraPage() {
  return (
    <>
      <Head>
        <title>Complementos em madeira</title>
      </Head>
      <PresentationSingle title="Complementos em madeira" />
      <Content
        title={'COMPLEMENTOS EM MADEIRA'}
        text={
          'Além de nossa ampla gama de esquadrias de PVC e móveis sob medida, nossa empresa também se destaca na fabricação de complementos em madeira que adicionam charme, sofisticação e um toque de elegância aos ambientes. Entre esses complementos, oferecemos uma variedade de opções, como rodapés, guarnições, lambris e revestimentos, todos meticulosamente projetados e fabricados com madeiras selecionadas e técnicas artesanais. Esses detalhes em madeira podem transformar completamente um espaço, adicionando personalidade e estilo únicos. Complementando nossas esquadrias e móveis, esses elementos em madeira elevam a estética dos ambientes, criando uma atmosfera acolhedora e convidativa. Nossa dedicação à qualidade e ao design se estende a cada um desses complementos, para que você possa desfrutar de ambientes verdadeiramente cativantes e sofisticados.'
        }
        contentImage={ImageContent}
        showButton
      />

      <Benefits
        text="Nossos complementos em madeira são cuidadosamente projetados e fabricados para proporcionar uma beleza natural e personalizada aos ambientes. Utilizamos madeiras selecionadas, com texturas, padrões e tonalidades únicas, para criar peças que se destacam pela sua estética e elegância exclusivas."
        textButton="Personalização Completa"
        image={logoPersonalizar}
        backgroundColor="#FFFEE0"
      />
      <Benefits
        text="Nossos complementos em madeira são projetados para serem de fácil manutenção. Com os cuidados adequados, como limpeza regular e utilização de produtos específicos para a conservação da madeira, você poderá desfrutar de seus complementos por muitos anos, mantendo sua beleza e integridade."
        textButton="Fácil manutenção"
        image={martelosCruzado}
        backgroundColor="#D0D0D0"
      />
      <Benefits
        text="Priorizamos a qualidade e a durabilidade dos nossos complementos em madeira. Utilizamos materiais de alta qualidade e aplicamos técnicas de fabricação meticulosas para garantir que cada peça seja resistente e duradoura. Nossos complementos em madeira são projetados para suportar o uso diário, mantendo sua beleza e funcionalidade ao longo do tempo."
        textButton="Durabilidade e Qualidade"
        image={durabilidade}
        backgroundColor="#FFFEE0"
      />
      <Benefits
        text="Temos orgulho de oferecer um serviço completo, que inclui não apenas a fabricação dos complementos em madeira, mas também a entrega e instalação. Contamos com uma equipe de profissionais especializados, que garantem que seus complementos sejam entregues com segurança e instalados com precisão."
        textButton="Entrega e instalação"
        image={entrega}
        backgroundColor="#D0D0D0"
      />
      <Benefits
        text="Nossos complementos em madeira trazem uma atmosfera acolhedora, calorosa e elegante para os ambientes. A presença da madeira adiciona um toque de charme e sofisticação, valorizando esteticamente os espaços e criando uma conexão emocional com a natureza."
        textButton="Valorização estética"
        image={lareira}
        backgroundColor="#FFFEE0"
      />
      <Projects>
        <div className={styles.row}>
          <Thumbnail
            imageUrl={m1}
            width={1000}
            height={500}
            minWidth={300}
            minHeight={200}
          />
          <Thumbnail
            imageUrl={m2}
            width={1000}
            height={500}
            minWidth={300}
            minHeight={200}
          />
          <Thumbnail
            imageUrl={m3}
            width={1000}
            height={500}
            minWidth={300}
            minHeight={200}
          />
          <Thumbnail
            imageUrl={m4}
            width={1000}
            height={500}
            minWidth={300}
            minHeight={200}
          />
        </div>
      </Projects>
    </>
  )
}
