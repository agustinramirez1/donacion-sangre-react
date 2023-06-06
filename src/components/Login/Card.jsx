// import React from 'react'

import { Link } from "react-router-dom"

const Card = ({ titulo, children, onSubmitHandler, iconStart, href, bgColor, iconEnd }) => {
    return (
        <div className="py-4 px-2">
            <div className="container shadow p-0 rounded-4">
                <div className={" border-bottom bg-sky-blue rounded-top-4" + (iconEnd || iconStart ? ' row m-0' : '')}>
                    {/* {iconStart &&
                        <Link to={href} id="back-button"
                            className="rounded-top-4 rounded-end-0 text-white fs-4 position-absolute ms-3 py-2">
                            <i className="bi bi-arrow-left"></i>
                        </Link>} */}

                    {iconStart && <Link to={href} id="boton-plus"
                        className="rounded-top-4 rounded-end-0 col-1 d-flex justify-content-center text-white fs-3" >
                        <i className="bi bi-arrow-left"></i>
                    </Link>}

                    <div className={'text-center text-white py-2 fs-4 ' + (iconEnd || iconStart ? 'col-11' : '') + (iconEnd ? ' pe-0 ps-5' : (iconStart ? ' pe-5 ps-0' : ''))}>{titulo}</div>

                    {iconEnd && <Link to={href} id="boton-plus"
                        className="rounded-top-4 rounded-start-0 col-1 d-flex justify-content-center text-white fs-3" >
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