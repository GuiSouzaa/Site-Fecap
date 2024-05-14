import Seta from '../../imagens/Setinha.png'
import perfil from '../../imagens/Perfil.png'
import style from 'styled-components'

const Icone = style.li`

    margin-right: 7px;
    cursor: pointer;
    padding: 0 5px;

`

const Icones = style.ul`

    display: flex;
    align-items: center;
    padding: 15px;

`

const icones = [perfil, Seta]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) => (
              <Icone><img src={icone} alt='icone'></img></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader