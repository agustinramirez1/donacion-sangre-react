import React from 'react'
import Botones from './Botones'

const Navbar = () => {

    const links = [
        { text: 'Solicitudes', url: '/solicitudes' },
        { text: 'Puntos de Donación', url: '/puntodonacion' }
    ]
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
                    <Botones color={"white"} text={"No funca kp"} background={'transparent'} border={'transparent'}/>
                    <Botones color={"skyblue"} text={"Este menos"} background={'white'} border={'transparent'}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar