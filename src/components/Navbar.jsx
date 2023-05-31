import { useNavigate } from 'react-router-dom'
import Botones from './Botones'

const Navbar = () => {

    const links = [
        { text: 'Solicitudes', url: '/solicitudes' },
        { text: 'Puntos de Donación', url: '/puntosdonacion' },
        { text: 'Certificados', url: '/certificados' }
    ]

    const navigate = useNavigate()
    const navegar = () => {
        navigate('/login')
    }
    return (
        <nav className='navbar-tukp'>
            <div className='container navbar-flex'>
                <div>
                    <img src="https://res.cloudinary.com/dhzoxdo6q/image/upload/v1685025897/Roshka/react-white_hcr6av.png" height={50} />
                </div>

                <div className='links'>
                    <ul className='lista'>
                        {links && links.map((item, index) => (
                            <li key={index}>
                                <a href={item.url} className='link'> {item.text}</a>
                            </li>
                        ))}
                    </ul>


                </div>
                <div>
                    <div>
                        <Botones color={"white"} text={"Login"} background={'transparent'} border={'transparent'} icon={'bi bi-person-fill'} iconPosition={'start'} onClick={navegar}/>
                        <Botones color={"skyblue"} text={"No funca"} background={'white'} border={'transparent'}/>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar