// import React from 'react'

import { Link } from "react-router-dom"

const Card = ({ titulo, children, onSubmitHandler, icon, href, bgColor }) => {
    return (
        <div className="py-4 px-2">
            <div className="container shadow p-0 rounded-4">
                <div className="row border-bottom bg-sky-blue rounded-top-4 mx-0">
                    <div className={"p-0 text-white fs-4 " + (icon ? 'col-11': 'col-12')}>
                        <p className='text-center m-0'>{titulo}</p>
                    </div>
                    {icon && <Link to={href} id="boton-plus"
                        className="rounded-top-4 rounded-start-0 col-1 d-flex justify-content-center text-white fs-3 icon" >
                        +
                    </Link>}
                </div>
                <form onSubmit={onSubmitHandler} className={"rounded-bottom-4 text-dark p-3 " + (bgColor ? bgColor : 'bg-secondary-subtle')}>
                    {children}
                </form>
            </div>
        </div>

    )
}

export default Card