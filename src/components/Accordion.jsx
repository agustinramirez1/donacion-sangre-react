
const Accordion = ({ lista, title, link, setLatlng }) => {

    const handleClick = (latitud, longitud) => {
        setLatlng({lat:latitud, lng:longitud})
    }


    return (
        <div className='accordion my-3' id="accordion">
            <div className='accordion-item'>

                <h2 className='accordion-header border-2'>
                    <button className='accordion-button collapsed' type='button' data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {title}
                    </button>
                </h2>

                <div id='collapseOne' className='accordion-collapse collapse' data-bs-parent='#accordion'>
                    <div className='accordion-body'>
                        <div className="row row-cols-md-2">
                            {lista && lista.map((item, index) => (
                                <div key={index}>
                                    <b>{item.local_donacion}</b><br />
                                    Direccion: {item.direccion ? item.direccion : '-'} <br />
                                    Horario: {item.hora_apertura ? (<>{item.hora_apertura}:00</>) : '00:00'} - {item.hora_cierre ? (<>{item.hora_cierre}:00</>) : '00:00'} <br /> <br />
                                    <button className="btn btn-color btn-sm me-3" onClick={() => handleClick(item.latitud, item.longitud)}>Ver Más</button>
                                    <a href={link + item.latitud + '%2c' + item.longitud}>Ver en Google Maps</a>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion