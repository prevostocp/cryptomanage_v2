
import { useNavigate } from 'react-router-dom'

export function AdministrationCard({ administration }) {

    const navigate = useNavigate();

    return (
        <div className='bg-zinc-700 hover:bg-zinc-600 my-4 p-3 rounded-lg cursor-pointer'
            onClick={() => {
                navigate(`${administration.url}`)
            }}
        >

            <h1 className='font-bold uppercase text-center' >{administration.name}</h1>

            <div className="relative inset-0 flex">
                <img className="rounded-lg m-auto my-4" src={administration.image} alt={administration.image} />
            </div>

            <p className='text-slate-400 text-center' >{administration.description}</p>
        </div>
    )
}