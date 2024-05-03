import styled from 'styled-components';
import { Link } from "react-router-dom"

const textoOpcoes = ['Certificados', 'Portfolio', 'Curriculo', 'Contato'];

const Opcao = styled.li`
  min-width: 120px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  margin-right: 15px;

  /* Adicionando efeito ao passar o mouse por cima */
  &:hover {
    -xpedu-transform: scale(0.8);
    -ms-transform: scale(1.0);
     transform: scale(1.1);
    background-image: linear-gradient(to right, rgba(240, 240, 240, 5) 1%, rgba(240, 240, 240, 0.2) 100%);
  }

  /* Estilos responsivos */
  @media (max-width: 768px) {
    font-size: 16px;
    min-width: auto;
    margin-right: 10px;
  }
`

const Opcoes = styled.ul`
  display: flex;
  box-sizing: border-box;

  /* Estilos responsivos */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`} key={texto}>
          <Opcao><p>{texto}</p></Opcao>
        </Link>
      ))}
    </Opcoes>
  )
}

export default OpcoesHeader;
