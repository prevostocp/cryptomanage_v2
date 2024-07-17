import { useNavigate } from 'react-router-dom'

export function CoinCard({coin}) {
    
    const navigate = useNavigate();
    
    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700' 
        
        onClick={() => {
            navigate(`/coins/${coin.id}`)
        }}>
            <h1 className='font-bold uppercase' >{coin.name}</h1>
            <p className='text-slate-400' >{coin.description}</p>
            
        </div>  
    )
}