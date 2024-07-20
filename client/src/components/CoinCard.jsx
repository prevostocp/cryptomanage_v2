import { useNavigate } from 'react-router-dom'

export function CoinCard({coin}) {
    
    const navigate = useNavigate();
    
    return (
        
        <>
        
        <div className='bg-zinc-800 p-3 '>
            
            <div className='bg-zinc-700 hover:bg-zinc-600 my-4'
                onClick={() => {
                    navigate(`/coins/${coin.id}`)
                }}
            >

                <h1 className='font-bold uppercase text-center' >{coin.name}</h1>

                <div className="relative inset-0 flex">
                <img className="m-auto my-4" src={coin.image} alt={coin.image} />
                </div>

                <p className='text-slate-400 text-center' >{coin.description}</p>
            </div>
            
           
            <div className="relative inset-0 flex">
                <a className='bg-sky-600  m-auto my-4' target="_blank" href={coin.webSite}>WebSite</a>
            </div>
           

        </div>  
        
        </>
    )
}