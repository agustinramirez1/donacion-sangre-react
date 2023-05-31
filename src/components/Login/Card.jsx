import React from 'react'

const Card = ({titulo, children}) => {
    return (
        <div className="py-4 px-2">
            <div className="container shadow bg-sky-blue rounded-4">
                <div className="row border-bottom">
                    <div className="col-12 p-0 text-white fs-4">
                        <p className='text-center m-0'>{titulo}</p>
                        <div className="bg-secondary-subtle text-dark">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card