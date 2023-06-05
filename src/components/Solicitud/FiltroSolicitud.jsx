import axios from "axios"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const FiltroSolicitud = ({ setSolicitudes }) => {

	const [check, setCheck] = useState(false)
	const access_token = localStorage.getItem('token')

	useEffect(() => {

		if (check) {
			const config = {
				headers: {
					'Authorization': `Bearer ${access_token}`
				}
			}
			axios.get("http://192.168.16.90:8000/api/solicitudes-protegido", config)
				.then((response) => {
					// console.log(response.data.data)
					setSolicitudes(response.data.data)
				}).catch((err) => {
					// console.log(err)
					let message = err.response?.data?.message;
					if (message) {
						Swal.fire({ icon: 'error', text: message })
					}
				});
		} else if (!check) {
			axios.get("http://192.168.16.90:8000/api/solicitudes")
				.then((response) => {
					setSolicitudes(response.data.data)
					// console.log(response.data.data)
				}).catch((err) => {
					// console.log(err)
					let message = err.response?.data?.message;
					if (message) {
						Swal.fire({ icon: 'error', text: message })
					}
				});
		}

	}, [check])



	return (
		<div className="my-3">
			<h2 className="text-white d-flex justify-content-center align-items-center">
				Mis Solicitudes
				<div className="form-check text-white ms-3">
					<input className="form-check-input bg-transparent fs-2" type="checkbox" id="flexCheckDefault" checked={check} onChange={()=>setCheck(!check)}/>
				</div>
			</h2>
		</div>
	)
}

export default FiltroSolicitud