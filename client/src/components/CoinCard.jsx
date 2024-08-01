import { useNavigate } from 'react-router-dom'

const CoinCard = ({ coin }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className='bg-zinc-800 p-3 rounded-lg cursor-pointer'>

                <div className='bg-zinc-700 hover:bg-zinc-600 my-4 rounded-lg'
                    onClick={() => {
                        navigate(`/coins/${coin.id}`)
                    }}
                >

                    <h1 className='font-bold uppercase text-center' >{coin.name}</h1>

                    <div className="relative inset-0 flex rounded-lg">
                        <img className="rounded-lg m-auto my-4" src={coin.image} alt={coin.image} />
                    </div>

                    <p className='text-slate-400 text-center' >{

                        coin.description.length <= 100 ? coin.description : coin.description.substring(0, 100) + '...'

                    }</p>
                </div>

                <div className="relative inset-0 flex">
                    <a className='p-1 bg-sky-600  m-auto my-4' target="_blank" href={coin.webSite}>WebSite</a>
                </div>

            </div>
        </>
    )
}


export default CoinCard;