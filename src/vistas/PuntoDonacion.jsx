import {useState, useEffect} from 'react'
import "leaflet/dist/leaflet.css";
import Accordion from '../components/Accordion';
import axios from 'axios';
import Map from '../components/Map/Map'


const PuntoDonacion = () => {

    const [locations, setLocations] = useState(null)
    
    useEffect(() => {
        axios.get("http://192.168.16.90:8000/api/locales")
            .then(response => {
                let data = response.data.data;
                setLocations(data)
            })
            .catch(error => console.log("Error", error))
    }, [])

    const link = 'https://www.google.com/maps/search/?api=1&query='

    const [latlng, setLatlng] = useState(null)

    return (
        <div className='container mx-auto my-5'>
            <Accordion title={'Ver Puntos'} lista={locations} link={link} setLatlng={setLatlng}/>
            <h1 className='text-center mb-3'>Puntos de Donación</h1>

            {locations && <Map locations={locations} link={link} latlng={latlng}/>}
        </div>
    )
}

export default PuntoDonacion