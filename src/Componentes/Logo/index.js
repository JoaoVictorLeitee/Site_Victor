import logo from '../../Imagens/eu.jpg'
import './estilo.css'

function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt='logo' className='logo-img'></img>
            <p className='nome'><strong>Victor</strong>Leite</p>
        </div>
    )
}

export default Logo;