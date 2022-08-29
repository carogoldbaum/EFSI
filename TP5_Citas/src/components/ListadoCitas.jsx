import Cita from "./Citas"

export default function ListadoCitas({ citas, setCitas }) {
    return (
        <div className="flex-1 md:pl-4 max-w-[460px]">
            <h2 className="text-[42px] text-center p-[30px]" id="font-p">ADMINISTRA TUS CITAS</h2>
            <div className="flex flex-col gap-4">{citas.map((cita, i) => <Cita
                {...cita}
                delete={() => {
                    const copy = [...citas]
                    copy.splice(i, 1)
                    setCitas(copy)
                }}
                key={i}
            />)}</div>
        </div>
    )
}