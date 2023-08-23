import PresentationSingle from '../../components/PresentationSingle'
import Content from '../../components/Content'
import ImageContent from '../../../public/images/PvcContent.jpg'
import Head from 'next/head'
import styles from './styles.module.scss'
import logoGarantia from '../../../public/images/vecteezy_warranty-icon-transpare.png'
import Image from 'next/image'
import like from '../../../public/images/like.png'
import dlike from '../../../public/images/dlike.png'
import Benefits from '../../components/Benefits'
import logoPersonalizar from '../../../public/images/personalizarR.png'
import Projects from '../../components/Projects'
import Thumbnail from '../../components/Thumnail'

import Bounce from 'react-reveal/Bounce'
import Slide from 'react-reveal/Slide'

import martelosCruzados from '../../../public/images/martelos-cruzados.png'
import durabilidade from '../../../public/images/durabilidade.png'
import insulation from '../../../public/images/insulation-icon-26.png'

import p1 from '../../../public//images/IMG_20220830_155453.jpg'
import p2 from '../../../public//images/p2.jpg'
import p3 from '../../../public//images/p3.jpg'
import p4 from '../../../public//images/p4.jpg'
import p5 from '../../../public//images/p5.jpg'
import p6 from '../../../public//images/p6.jpg'
import p7 from '../../../public//images/p7.jpg'
import p8 from '../../../public//images/p8.jpg'
import p9 from '../../../public//images/p9.jpg'
import p10 from '../../../public//images/p10.jpg'
import p11 from '../../../public//images/p11.jpg'

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
          <Slide left>
            <div className={styles.col1}>
              <p>VEDAÇÃO</p>
              <p>SEGURANÇA</p>
              <p>DURABILIDADE</p>
              <p>ESTÉTICA</p>

              <p>ISOLAMENTO TÉRMICO</p>
              <p>ISOLAMENTO ACÚSTICO</p>
              <p>EFICIÊNCIA TÉRMICA</p>
            </div>
          </Slide>

          <Bounce bottom cascade>
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
          </Bounce>
        </div>
      </div>
      <Benefits
        text="Nossos móveis sob medida oferecem a possibilidade de personalização completa, permitindo que cada peça seja adaptada às preferências e necessidades específicas de cada cliente. Desde o tamanho, formato, materiais, acabamentos até os detalhes de design, tudo é pensado para criar móveis exclusivos que se encaixam perfeitamente no ambiente."
        textButton="Personalização Completa"
        image={logoPersonalizar}
        backgroundColor="#FFFEE0"
      />
      <Benefits
        text="As esquadrias de PVC são conhecidas por sua baixa necessidade de manutenção. Diferentemente das esquadrias de madeira, que exigem tratamentos periódicos e pintura, as esquadrias de PVC são fáceis de limpar e não requerem pintura ou verniz. Basta uma limpeza regular para mantê-las em bom estado, economizando tempo e recursos em manutenção."
        textButton="Baixa manutenção"
        image={martelosCruzados}
        backgroundColor="#D0D0D0"
      />
      <Benefits
        text="Nossas esquadrias de PVC são fabricadas com materiais de primeira linha, garantindo alta qualidade e durabilidade. O PVC é um material resistente, capaz de suportar as condições climáticas adversas, como sol, chuva, umidade e variações de temperatura, sem perder suas propriedades estruturais e estéticas ao longo do tempo."
        textButton="Durabilidade e Qualidade"
        image={durabilidade}
        backgroundColor="#FFFEE0"
      />
      <Benefits
        text="As esquadrias de PVC possuem excelentes propriedades de isolamento térmico e acústico. O PVC atua como uma barreira eficiente, ajudando a manter a temperatura interna estável e reduzindo a transferência de ruídos externos. Isso proporciona um ambiente interno mais confortável, com melhor controle da temperatura e maior tranquilidade acústica."
        textButton="Isolamento térmico e acústico"
        image={insulation}
        backgroundColor="#D0D0D0"
      />
      <Projects>
        <div className={styles.row}>
          <Thumbnail
            imageUrl={p1}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
          <Thumbnail
            imageUrl={p2}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
          <Thumbnail
            imageUrl={p3}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
          <Thumbnail
            imageUrl={p4}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
        </div>
        <div className={styles.row}>
          <Thumbnail
            imageUrl={p5}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
          <Thumbnail
            imageUrl={p6}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
          <Thumbnail
            imageUrl={p7}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
          <Thumbnail
            imageUrl={p8}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
        </div>
        <div className={styles.row}>
          <Thumbnail
            imageUrl={p11}
            width={900}
            height={600}
            minWidth={300}
            minHeight={222}
          />
          <Thumbnail
            imageUrl={p9}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
          <Thumbnail
            imageUrl={p10}
            width={1000}
            height={600}
            minWidth={300}
            minHeight={222}
          />
        </div>
      </Projects>
    </>
  )
}
