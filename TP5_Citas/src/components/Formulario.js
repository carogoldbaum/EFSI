import { useState } from "react"

export default function Form({ setCitas }) {

    const [NombreMascota, setNombreMascota] = useState("")
    const [Propietario, setPropietario] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("") 

    const enviar = (enviar2) => {
        enviar2.preventDefault();
        setCitas(prev => [...prev, {
            NombreMascota,
            Propietario,
            fecha,
            hora,
            sintomas
        }])
        setNombreMascota("")
        setPropietario("")
        setFecha("")
        setHora("")
        setSintomas("")
    }

   return(
<div className="container pb-4 w-[460px]">
    <h2 className='text-[42px] text-center p-[30px]' id="font-p">CREAR MI CITA</h2>
<form onSubmit={enviar} >
<div className="mb-2">
    <label htmlFor="large-input" className="block mb-2 text-[15px] text-white font-semibold">Nombre Mascota</label>
    <input value={NombreMascota} onChange={enviar2 => setNombreMascota(enviar2.target.value)} type="text" id="base-input" className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
</div>
<div className="mb-2">
    <label htmlFor="base-input" className="block mb-2 text-[15px] text-white font-semibold">Nombre Dueño</label>
    <input value={Propietario} onChange={enviar2 => setPropietario(enviar2.target.value)} type="text" id="base-input" className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
</div>
<div className="mb-2">
    <label htmlFor="base-input" className="block mb-2 text-[15px] text-white font-semibold">Fecha</label>
    <input value={fecha} onChange={enviar2 => setFecha(enviar2.target.value)} type="date" id="base-input" className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
</div>
<div className="mb-2">
    <label htmlFor="base-input" className="block mb-2 text-[15px] text-white font-semibold">Hora</label>
    <input name="Hora" value={hora} onChange={enviar2 => setHora(enviar2.target.value)} type="time" id="base-input" className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5"/>
</div>

<label htmlFor="message" className="block mb-2 text-[15px] text-white font-semibold">Sintomas</label>
<textarea required name="Sintomas" value={sintomas} onChange={enviar2 => setSintomas(enviar2.target.value)} type="text" id="base-input" className="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
<br></br>
<button type="submit" className="place-content-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium tracking-widest rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[460px]">Agregar cita</button>
</form>
</div>

    );
}
   