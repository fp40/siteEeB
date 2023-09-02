import Head from 'next/head'

import Presentation from '../components/Presentation'
import Content from '../components/Content'
import Cards from '../components/Cards'
import ContentImage from '../../public/images/moveisContent.png'
import Form from '../components/Form'
import BtnWhats from '../components/BtnWhats'
import Maps from '../components/Maps'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elibio e Bianchini</title>
      </Head>
      <Presentation />
      <Content
        title={'Sobre'}
        text={
          'Bem-vindo à nossa empresa, com mais de 10 anos de experiência no mercado. Com esquadrias de PVC, móveis sob medida, portas internas, portas pivotantes e complementos em madeira. Estamos localizados em Capão da Canoa, atendendo o litoral norte gaúcho. Desde a nossa fundação, temos nos dedicado incansavelmente a fornecer soluções de alta qualidade para a construção e decoração de residências, escritórios e empreendimentos comerciais. A nossa longa trajetória nos tornou referência no setor, conquistando a confiança e satisfação de clientes exigentes em toda a região.Seja você um cliente residencial, comercial ou profissional da construção civil, convidamos você a conhecer a nossa fábrica e descobrir como podemos transformar seus projetos em realidade. Entre em contato conosco hoje mesmo e permita-nos fazer parte do seu próximo empreendimento.'
        }
        contentImage={ContentImage}
      />
      <Cards />
      <Form />
      <BtnWhats
        title="OU ENTRE EM CONTATO PELO WHATS"
        link="https://api.whatsapp.com/send/?phone=5551991725243&text&type=phone_number&app_absent=0"
      />
      <Maps />
    </>
  )
}
