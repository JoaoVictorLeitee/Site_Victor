import styled, { keyframes } from "styled-components";
import fotohome from "../../Imagens/fotohome.jpg";

const animeLeft = keyframes`
  0% {
    transform: translateX(-40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const HomeContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`;

const Titulo = styled.h1`
    color: #000000;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const HometelaContainer = styled.section`
    color: #555;
    text-align: center;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const HomeBox = styled.div`
    background-color: white;
    padding: 1%;
    box-shadow: 0px 0px 10px rgba(0, 0.1, 0.2, 0.5); /* Sombreamento */
    border-radius: 10px;
    width: 50%; /* Ajusta a largura do quadrado */
    max-width: 570px; /* Largura máxima */
    margin-top: -20px;
    margin-left: -9px; /* Adiciona espaçamento entre a imagem e o box */
    animation: ${animeLeft} 1s forwards; /* Adiciona a animação */
`;

const VerticalImage = styled.img`
    width: 30%;
    height: auto; /* Garante que a imagem seja responsiva */
    max-height: 100%; /* Limita a altura da imagem */
    border-radius: 10px;
    margin-right: 10px; /* Adiciona espaçamento entre a imagem e o texto */
    animation: ${animeLeft} 1s forwards;
    margin-top: -20px;
`;

function HomeTela() {
  return (
    <HomeContainer>
      <HometelaContainer>
        <HomeWrapper>
          <VerticalImage src={fotohome} /> {/* Adiciona o caminho da imagem */}
          <HomeBox>
            <Titulo>Seja Bem Vindo a minha página</Titulo>
            <h2>
              Formado em Sistemas de informação em 2020 com experiência em suporte desde 2017,
              hoje me encontro atuando na área de supervisor de suporte onde gerencio uma equipe com total de 9 pessoas
              onde trabalhamos em atendimentos ao cliente, implantações de APIs, instalação de ERP, configuração de servidores, migrações e analise de dados SQL no banco PostgreSQL,
              migrações para nuvem AWS AppStream e demais ferramentas e serviços que a empresa fornece.
            </h2>
            <h2>
              Estudando liguagens de desenvolvimento desde 2021 iniciando em Python e aprofundando em bibliotecas Pandas e Streamlit,
              conhecimento também em JavaScript, NodeJS e React onde desenvolvi esse portal para demonstrar um pouco do meu conhecimento.
            </h2>
            <h2>
              A procura de uma oportunidade como Desenvolvedor Junior nas minhas áreas de estudo.
            </h2>
          </HomeBox>
        </HomeWrapper>

      </HometelaContainer>
    </HomeContainer>
  );
}

export default HomeTela;
