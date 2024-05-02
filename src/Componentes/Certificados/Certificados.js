import styled, { keyframes } from "styled-components";
import cert from "../../Imagens/cert.png";

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

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ContatosWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const ContatoBox = styled.div`
    background-color: white;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0.1, 0.2, 0.5);
    border-radius: 10px;
    margin: 10px;
    animation: ${animeLeft} 1s forwards;
    width: calc(50% - 20px); // 50% do espaço disponível
    max-width: 300px; // Largura máxima
`;

const Titulo = styled.h2`
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
`;

const Subtitulo = styled.h3`
    color: #333;
    font-size: 16px;
    margin-bottom: 10px;
`;

const Itens = styled.p`
    color: #333;
    font-size: 18px;
    margin: 5px 0;
`;

const Icone1 = styled.img`
    width: 50px;
    margin-top: 28px;
`;

function SobreTela() {
  return (
    <PesquisaContainer>
      <ContatosWrapper>
        <ContatoBox>
          <Titulo>Formação Programador BackEnd</Titulo>
          <Subtitulo>Conhecimentos Adquiridos:</Subtitulo>
          <Itens>JWT</Itens>
          <Itens>Express</Itens>
          <Itens>Bibliotecas NPM</Itens>
          <Itens>Insomnia</Itens>
          <Itens>Rotas HTTP</Itens>
          <Itens>Post, Put, Get, Delete</Itens>
          <a href="https://www.udemy.com/certificate/UC-b6295925-c4f9-4c2f-8376-afa3a3a0d8ab/?trk=public_profile_certification-title" target="_blank">
            <Icone1 src={cert} alt='Certificado' />
          </a>
        </ContatoBox>
        <ContatoBox>
          <Titulo>Bancos de Dados SQL e NoSQL</Titulo>
          <Subtitulo>Conhecimentos Adquiridos:</Subtitulo>
          <Itens>DQL - Data Query Language</Itens>
          <Itens>DML - Data Manipulation Language</Itens>
          <Itens>DCL - Data Control Language</Itens>
          <Itens>DDL - Data Definition Language</Itens>
          <a href="https://www.udemy.com/certificate/UC-4fb39bd2-8b1f-49eb-835b-e15d6ccc57bb/?trk=public_profile_certification-title" target="_blank">
            <Icone1 src={cert} alt='Certificado' />
          </a>
        </ContatoBox>
        <ContatoBox>
          <Titulo>Programação em Python do básico ao avançado</Titulo>
          <Subtitulo>Conhecimentos Adquiridos:</Subtitulo>
          <Itens>Introdução a linguagem</Itens>
          <Itens>Variáveis e Tipos de Dados em Python</Itens>
          <Itens>Estruturas Lógicas e Condicionais em Python</Itens>
          <Itens>Coleções Python</Itens>
          <Itens>Funções Python</Itens>
          <Itens>Comprehensions em Python</Itens>
          <Itens>Bibliotecas Python (Streamlit e Pandas)</Itens>
          <a href="https://www.udemy.com/certificate/UC-0d06f0e6-2c0a-4f87-868e-d1b104291bc9/?trk=public_profile_certification-title" target="_blank">
            <Icone1 src={cert} alt='Certificado' />
          </a>
        </ContatoBox>
        <ContatoBox>
          <Titulo>Introdução à programação com Python</Titulo>
          <Subtitulo>Conhecimentos Adquiridos:</Subtitulo>
          <Itens>Lógica de programação em Python</Itens>
          <a href="https://www.dio.me/certificate/2411BADC/share" target="_blank">
            <Icone1 src={cert} alt='Certificado' />
          </a>
        </ContatoBox>
        <ContatoBox>
          <Titulo>Introdução ao Git e ao GitHub</Titulo>
          <Subtitulo>Conhecimentos Adquiridos:</Subtitulo>
          <Itens>Ferramentas Git e GitHub</Itens>
          <a href="https://www.dio.me/certificate/DFE85637/share" target="_blank">
            <Icone1 src={cert} alt='Certificado' />
          </a>
        </ContatoBox>
      </ContatosWrapper>
    </PesquisaContainer>
  );
}

export default SobreTela;
