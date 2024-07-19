import { useNavigate } from 'react-router-dom'

export function CoinCard({coin}) {
    
    const navigate = useNavigate();
    
    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 my-4' 
        
        onClick={() => {
            navigate(`/coins/${coin.id}`)
        }}>
            <h1 className='font-bold uppercase text-center' >{coin.name}</h1>

            <div className="relative inset-0 flex">
                <img className="m-auto my-4" src={coin.image} alt={coin.image} />
            </div>
            
            <p className='text-slate-400 text-center' >{coin.description}</p>

        </div>  
    )
}