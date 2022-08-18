export default function Cita (props) {
    return (
        <div className="bg-white rounded-2xl text-black p-5 shadow-sm">
            <p className="mb-3"><strong>Mascota: </strong>{props.NombreMascota}</p>
            <p className="mb-3"><strong>Dueño: </strong>{props.Propietario}</p>
            <p className="mb-3"><strong>Fecha: </strong>{props.fecha}</p>
            <p className="mb-3"><strong>Hora: </strong>{props.hora}</p>
            <p className="mb-3"><strong>Sintomas: </strong>{props.sintomas}</p>
            <button onClick={props.delete} className="text-center w-full border border-gray-500 rounded-sm my-2 py-2 text-[11px] font-bold tracking-widest">ELIMINAR ×</button>
        </div>
    )
}