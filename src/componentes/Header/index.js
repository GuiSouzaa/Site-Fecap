
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'
import LogoImage from '../../imagens/fecapback.png'

const HeaderContainer = styled.header`

    background-color: #0da36f;
    display: flex;
    justify-content: flex-end;
    height: 9vh;
`

const Logo = styled.img`
    height: 6vh;
    margin-top: 15px;
    width: auto; /* Define a largura do logo conforme necessário */
    margin-right: auto; /* Move o logo para a esquerda */
    margin-left: 0px; /* Adiciona um espaço entre o logo e os outros elementos */
`;
function Header() {
    return (
        <HeaderContainer>
            <Logo src={LogoImage} alt='Logo'></Logo>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header