import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

const PuntoDonacion = () => {
    let locations =
        [
            {
                "id": 1,
                "local_donacion": "EL CANTARO",
                "longitud": -56.820182,
                "latitud": -27.387026,
                "creado_por": null,
                "direccion": "Av. Paraguay Casi Mcal. Lopez 343",
                "hora_apertura": 8,
                "hora_cierre": 21
            },
            {
                "id": 2,
                "local_donacion": "FCA - CAMPUS UNP",
                "longitud": -58.288459,
                "latitud": -26.879844,
                "creado_por": null,
                "direccion": "Eusebio Ayala casi Intendentes Militares 123",
                "hora_apertura": 8,
                "hora_cierre": 21
            },
            {
                "id": 3,
                "local_donacion": "EL CANTARO",
                "longitud": -56.820182,
                "latitud": -27.387026,
                "creado_por": null,
                "direccion": "Av. Paraguay Casi Mcal. Lopez 343",
                "hora_apertura": 8,
                "hora_cierre": 21
            },
            {
                "id": 4,
                "local_donacion": "Surubi-i, Mariano",
                "longitud": -57.521369,
                "latitud": -25.194156,
                "creado_por": null,
                "direccion": "Ruta Transchaco 1232 casi las Lomas Km. 3",
                "hora_apertura": null,
                "hora_cierre": null
            },
            {
                "id": 5,
                "local_donacion": "SODEP",
                "longitud": -57.583222,
                "latitud": -25.308953,
                "creado_por": null,
                "direccion": "Av. Paraguay Casi Mcal. Lopez 343",
                "hora_apertura": 8,
                "hora_cierre": 21
            },
            {
                "id": 6,
                "local_donacion": "ROSHKA",
                "longitud": -57.6100684,
                "latitud": -25.2818691,
                "creado_por": null,
                "direccion": null,
                "hora_apertura": null,
                "hora_cierre": null
            }
        ]

        const link = 'https://www.google.com/maps/search/?api=1&query='

    const position = [-25.281780051206198, -57.61060431859776]

    return (
        <div className='container mx-auto my-5'>
            <h1 className='text-center mb-3'>Puntos de Donación</h1>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((item, index) => (
                    <Marker key={index} position={[item.latitud, item.longitud]}>
                        <Popup>
                            <b>{item.local_donacion}</b><br />
                            {item.direccion ? (<>{item.direccion}<br /></>) : ''} 
                            Horario: {item.hora_apertura ? (<>{item.hora_apertura}:00</>) : '00:00'} - {item.hora_cierre ? (<>{item.hora_cierre}:00</>) : '00:00'} <br />
                            <a href={link + item.latitud + '%2c' + item.longitud}>Ver en Google Maps</a>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default PuntoDonacion