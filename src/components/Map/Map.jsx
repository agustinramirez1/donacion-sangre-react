import { useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet"
import MapFly from "./MapFly"

const Map = ({ locations, link, latlng }) => {

    const [center, setCenter] = useState(null)

    useEffect(() => {
        if (locations) {
            let position = [locations[0].latitud, locations[0].longitud]
            setCenter(position)
        }
    }, [locations])

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }


    return (
        <>
            {(center && locations) &&
                <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
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
                    <LocationMarker />
                    <MapFly latlng={latlng}/>
                </MapContainer>
            }
        </>
    )
}

export default Map