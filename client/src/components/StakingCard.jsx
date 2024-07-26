import { useNavigate } from 'react-router-dom'

export function StakingCard({ staking }) {

    const navigate = useNavigate();

    return (
        <>
            <div className='bg-zinc-800 p-3 rounded-lg cursor-pointer'>

                <div className='bg-zinc-700 hover:bg-zinc-600 my-4 rounded-lg'
                    onClick={() => {
                        navigate(`/stakings/${staking.id}`)
                    }}
                >
                    <h1 className='font-bold uppercase text-center' >{staking.name}</h1>

                    <div className="relative inset-0 flex rounded-lg">
                        <img className="rounded-lg m-auto my-4" src={staking.image} alt={staking.image} />
                    </div>

                    <p className='text-slate-400 text-center' >{staking.description}</p>
                </div>

                <div className="relative inset-0 flex">
                    <a className='bg-sky-600  m-auto my-4' target="_blank" href={staking.webSite}>WebSite</a>
                </div>

            </div>
        </>
    )
}