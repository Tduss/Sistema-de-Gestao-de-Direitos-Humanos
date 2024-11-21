import Json from '../dados.json'
import { Chart as ChartJS, CategoryScale, Tooltip, Legend, LinearScale,BarElement,Title,ArcElement } from "chart.js";
import { Bar, Doughnut } from 'react-chartjs-2';
import {useState,useEffect } from 'react';
import { FaPhoneVolume, FaWhatsapp, FaAppStore } from 'react-icons/fa';
import { PiPersonFill } from 'react-icons/pi'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,

);


export const Cards = () => {
  const [chartData, setCharData] = useState({})
  const dados =  Json.data

  
  const labels = ['Mulheres','Crianças e Adolescentes','Pessoas Idosas','Pessoas com deficiência','Pessoas em restrição de Liberdade','População LGBTQIA+','Pessoas em Situação de Rua']



 const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sistema de Acesso aos Direitos Humanos',
    },
  },
};


  
  useEffect(()=>{
    onChangeUf()
    
  },[])
  
  const doughnuts = Json.type.map((data)=> data)

  const doughnutLabels = doughnuts.map(doughnuts => doughnuts.name)

    const doughnutData = {
      labels:doughnutLabels,
      datasets: [
        {
          label: '# of Votes',
          data: doughnuts.map(doughnutLabel => doughnutLabel.value),
          backgroundColor: [
            '#9b5de5',
            '#f15bb5',
            '#fee440',
            '#00bbf9',
            '#00f5d4',
            '#ec382c',
            '#'
          ],
         
        },
      ],
    };
  function onChangeUf(event){
    let uf;
    if(!event){

    uf = 'SP'
    }else{

    uf = event.target.value
    } 
    

    const newChartData = {
      labels,
      datasets: [
        {
          label: 'Violações', 
          data: labels.map(label => {
            const ufData = dados.find(dado => dado.uf == uf)
    
            const ufGroupsData = ufData.groups.find(dado => dado.title === label )
            
            return ufGroupsData.cases
          }),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Denúncias', 
          data:labels.map(label => {
            const ufData = dados.find(dado => dado.uf == uf)
    
            const ufGroupsData = ufData.groups.find(dado => dado.title === label )
            
            return ufGroupsData.complaints
          }),
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      ],
  } 
    setCharData(newChartData)
  }

  return (
    <div>
      <div className='flex-col items-center text-center mt-24 justify-center mb-8 px-8 md:px-52 md:mt-32'>
        <h1 className="font-bold mb-1 text-2xl text-gray-900">Sistema de Acesso aos Direitos Humanos</h1>
        <h2 className='text-lg mb-5 font-semibold text-gray-700'>Denuncie aqui a violacao dos Direitos Humanos</h2>
        <p className='text-gray-500 text-justify'>
          Segundo a  Declaração Universal dos Direitos Humanos, adotada e proclamada pela Assembleia Geral das Nações Unidas em 10 de dezembro 1948, todo ser humano nasce livre e tem direito à vida, à liberdade e à segurança pessoal.
          Os direitos humanos são universais e inalienáveis, e são a base de uma sociedade justa e inclusiva. Reconhecemos que certos grupos enfrentam desafios e barreiras adicionais, que os colocam em uma posição de vulnerabilidade. Portanto, <span className='font-bold'>nossa missão</span> é dar voz e apoio a essas comunidades, visando a superação das desigualdades e a garantia de oportunidades iguais para todos.
        </p>
        <p className='text-gray-500 text-justify mt-4 mb-6'>
        Baseado nos dados fornecidos pela  <span className='font-bold'> sociedade civil </span> fazemos uma análise quantitativa, o reflexo das violações de direitos humanos enfrentadas pelos grupos vulneráveis de Mocambique.
        </p>
        <div className='flex justify-end'>
          <form className='mb-6 flex justify-between gap-x-6'>
            <select name="uf" onChange={onChangeUf} className='rounded-md border-pink-400 border-b-4 bg-white px-3 py-2 text-center text-stone-900 flex items-center justify-center cursor-pointe'>
              <option value="SP" >Maputo</option>
              <option value="RJ">Sofala</option>
              <option value="MG">Cabo Delgado</option>
              <option value="ES">Nampula</option>
            </select>
            
          </form>
        </div>
        <div className='w-[100%] items-center flex justify-center mb-5 shadow-xl'>
          <div className='w-2/4 h-96 text-sm'>
            {Object.keys(chartData).length && (
            <Bar
              className='text-sm'
              options={options}
              data={chartData}
            />
            ) 
          }
          </div> 
        </div>
        <span className='text-xs font-bold'>Fonte: <a href='https://redemoz-defensoresdireitoshumanos.org/' target='_blank' className='font-semibold'>RMDDH - Rede Moçambicana dos Defensores de Direitos Humanos</a></span>
        {/* <p className='text-gray-500 text-justify mt-10'>
        Ao analisar esses números, fica evidente a urgência de ações efetivas para combater essas violações de direitos. É fundamental que as autoridades governamentais, organizações não governamentais e a sociedade como um todo se unam para promover a conscientização, a educação e o fortalecimento dos grupos vulneráveis. Além disso, é necessário que políticas públicas mais robustas sejam implementadas para garantir a proteção e a inclusão dessas comunidades.
        </p> */}
        <p className='text-gray-500 text-justify mt-4 mb-6'>
        Este sistema de acesso aos DH serve como um ponto de partida para ações concretas. Ao trazer à tona essas estatísticas, esperamos incentivar a sociedade a refletir sobre a importância de se construir uma cultura de respeito, igualdade e justiça para todos. A denúncia e o registro desses casos são passos cruciais para a documentação das violações e para a busca por soluções efetivas.
        </p>
        <div className='flex flex-col gap-12 items-center justify-between py-7 mt-5 bg-zinc-100 rounded-3xl md:flex-row'>
          <div className="text-content px-5 md:px-10">
            <h2 className='text-start font-bold'>Análise da Espécie de Violação</h2>
            <p className='text-gray-500 text-justify mt-10'>
            A garantia dos Direitos Humanos é essencial para manter o bem-estar social. Os direitos à <span className='font-bold'>integridade, liberdade individual, direitos sociais, igualdade, direitos civis e políticos, direito à vida e ao meio ambiente ecologicamente equilibrado </span> são pilares fundamentais dos direitos humanos. Eles garantem a proteção da dignidade e da segurança de cada indivíduo, assegurando que não sejam submetidos a tortura, maus-tratos ou violência.
            </p>
            {/* <p className='text-gray-500 text-justify mt-3'>
            Todo indivíduo tem o direito de ser livre, de expressar suas opiniões e de viver sem medo de perseguição ou detenção arbitrária. O direito social é priorizado, permitindo o acesso a uma educação de qualidade, cuidados de saúde, moradia adequada, trabalho digno e outros benefícios essenciais para uma vida plena e justa, onde a igualdade seja a base para a construção de uma sociedade em que os direitos civis e políticos da população sejam expressados por meio da participação ativa dos indivíduos na sociedade. Além disso, é ressaltada a importância do direito humano de conviver em um meio ambiente equilibrado, tanto individualmente quanto coletivamente. Não obstante a isso, toda a criação dos Direitos Humanos refere-se à valorização do direito à vida.
            </p> */}
            <p className='text-gray-500 text-justify mt-3'>
            No gráfico apresentado, mostra-se a quantidade de violações aos Direitos Humanos em MOZ em relação à espécie de violação. 
            </p>
          </div>
          <div className="doghnut-content">
             <Doughnut data={doughnutData}/>
          </div>
        </div>
        <div className='mt-12'>
            <h1 className='text-start font-bold'>Formas de denunciar violação de direitos humanos</h1>
            <p className='text-gray-500 text-justify mt-7'>
            As ligações para denuncia podem ser feitas, gratuitamente e anonimament, a partir (celular): basta <span className='font-bold'>discar 84/86/82/100</span>.
            </p>
            <p className='text-gray-500 text-justify mt-2'>
            Também é possível fazer denúncias pelo aplicativo <span className='font-bold'>Direitos Humanos Moz</span>, disponível para download gratuito nas lojas virtuais Google Play e Apple Store.
            </p>
            <p className='text-gray-500 text-justify mt-2'>
              O serviço funciona também presencialmente de segunda à sexta-feira de 9h às 12h e de 14h às 18h, exceto aos feriados.
            </p>
            <p className='text-gray-500 text-justify mt-2'>
              <span className='font-bold'>Endereço: </span>Maputo, av. Eduardo Mondlane ao pe da estatua
            </p>
            
            <div className='flex flex-col gap-2 items-center justify-between py-8 px-8 text-xs md:text-base md:px-20 md:flex-row'>
              <p className=' font-bold uppercase mt-3 flex items-center justify-center gap-2 text-pink-500'>
                <FaPhoneVolume size={20} />
                84/86/82/100
              </p>
              <p className=' font-bold uppercase mt-3 flex items-center justify-center gap-2 text-pink-500'>
                <FaWhatsapp size={20} />
                <a href="https://graph.facebook.com/v21.0/416304198242300/messages" target="_blank"> Whatsapp</a>
              </p>
              <p className='font-bold uppercase mt-3 flex items-center justify-center gap-2 text-pink-500'>
                <FaAppStore size={20} />
                <a href="http://localhost:5173/" target="_blank"> RMDDH</a>
              </p>
              <p className='font-bold uppercase mt-3 flex items-center justify-center gap-2 text-pink-500'>
                <PiPersonFill size={20} />
                Presencial/Cartão Postal
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

