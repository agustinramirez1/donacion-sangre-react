import { NavLink, useNavigate } from 'react-router-dom'
import Botones from './Botones'

const Navbar = () => {

    const links = [
        { text: 'Solicitudes', url: '/solicitudes' },
        { text: 'Puntos de Donación', url: '/puntosdonacion' },
        { text: 'Certificados', url: '/certificados' }
    ]

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    return (
        <nav className='navbar-tukp'>
            <div className='container-fluid navbar-flex'>
                <div className='d-flex align-items-center'>
                    <span className='fs-3 text-white'>Donación de Sangre &nbsp;</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/1142/1142102.png" height={50} />
                </div>

                <div className='links'>
                    <ul className='lista'>
                        {links && links.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.url} className='link'> {item.text}</NavLink>
                            </li>
                        ))}
                    </ul>


                </div>
                <div>
                    <div>
                        {token && <Botones color={"white"} text={"Perfil"} background={'transparent'} border={'transparent'} icon={'bi bi-person-fill'} iconPosition={'start'} onClick={()=>navigate('/perfil')}/>}
                        {!token && <Botones color={"white"} text={"Registrarse"} background={'transparent'} border={'transparent'} icon={'bi bi-person-plus-fill'} iconPosition={'start'} onClick={()=>navigate('/registro')}/>}
                        {!token && <Botones color={"skyblue"} text={"Login"} background={'white'} border={'transparent'} onClick={()=>navigate('/login')} icon={'bi bi-box-arrow-in-right'} iconPosition={'start'}/>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar