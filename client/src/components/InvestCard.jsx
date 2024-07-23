import { useNavigate } from 'react-router-dom'

export function InvestCard({ invest }) {

    const navigate = useNavigate();

    return (
        <div className='bg-zinc-700 hover:bg-zinc-600 my-4 p-3 rounded-lg cursor-pointer'
            onClick={() => {
                navigate(`${invest.url}`)
            }}
        >

            <h1 className='font-bold uppercase text-center' >{invest.name}</h1>

            <div className="relative inset-0 flex">
                <img className="rounded-lg m-auto my-4 h-40 w-30" src={invest.image} alt={invest.image} />
            </div>

            <p className='text-slate-400 text-center' >{invest.description}</p>
        </div>
    )
}