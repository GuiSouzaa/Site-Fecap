import './estilo.css'
import Seta from '../../imagens/Setinha.png'
import perfil from '../../imagens/Perfil.png'

const icones = [perfil, Seta]

function IconesHeader() {
    return (
        <ul className='icones'>
            { icones.map( (icone) => (
              <li className='icone'><img src={icone} alt='icone'></img></li>
            )) }
        </ul>
    )
}

export default IconesHeader