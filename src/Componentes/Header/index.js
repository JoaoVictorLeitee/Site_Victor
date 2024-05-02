import Icones from '../../Componentes/Icones';
import OpcoesHeader from '../../Componentes/OpcoesHeader';
import Logo from '../../Componentes/Logo/index'
import styled from 'styled-components'
import { Link } from 'react-router-dom';



const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`


function Header() {
    return(
        <HeaderContainer>
        <Link to="/">
            <Logo/>
        </Link>
        <OpcoesHeader/>
        <Icones/>
      </HeaderContainer>
    )
}

export default Header;