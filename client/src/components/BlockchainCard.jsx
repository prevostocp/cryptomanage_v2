import { useNavigate } from 'react-router-dom';

export function BlockchainCard({ blockchain }) {

    const navigate = useNavigate();

    return (
        <div className='bg-zinc-800 p-3 rounded-lg cursor-pointer'>

            <div className='bg-zinc-700 hover:bg-zinc-600 my-4 rounded-lg'
                onClick={() => {
                    navigate(`/blockchains/${blockchain.id}`)
                }}
            >
                <h1 className='font-bold uppercase text-center' >{blockchain.name}</h1>

                <div className="relative inset-0 flex rounded-lg">
                    <img className="rounded-lg m-auto my-4" src={blockchain.image} alt={blockchain.image} />
                </div>

                <p className='text-slate-400 text-center' >{blockchain.description}</p>

            </div>

            <div className="relative inset-0 flex">
                <a className='bg-sky-600  m-auto my-4 p-2 ' target="_blank" href={blockchain.blockScan}>BlockScan</a>
                <a className='bg-sky-600  m-auto my-4 p-2' target="_blank" href={blockchain.webSite}>WebSite</a>
            </div>


        </div>
    );
}
