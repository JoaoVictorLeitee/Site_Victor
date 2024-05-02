import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 10px;
  text-align: center;
  z-index: 999; /* Garante que o rodapé esteja acima de outros elementos se houver sobreposição */

  p {
    color: #000000; /* Cor do texto preto */
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  min-height: 60vh; /* Garante que o ContentWrapper tenha pelo menos a altura da tela inteira */
  padding-bottom: 60px; /* Ajusta o padding-bottom para acomodar o footer */
  box-sizing: border-box; /* Garante que a altura do ContentWrapper inclua o padding */
`;

const Rodape = () => {
  return (
    <ContentWrapper>
      <Footer>
        <div>
          <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
        </div>
      </Footer>
    </ContentWrapper>
  );
};

export default Rodape;
