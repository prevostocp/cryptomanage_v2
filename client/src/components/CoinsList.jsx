import { useEffect, useState } from 'react'
import { getAllCoins } from '../api/coins.api';
import { CoinCard } from './CoinCard';


export function CoinsList() {
    
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        async function loadCoins() {
            const res = await getAllCoins()
            setCoins(res.data)
        }
        loadCoins()
    }, []);
    
    return (
        <div className='grid grid-cols-3 gap-3'>
           { coins.map( coin => (
             <CoinCard key={coin.id} coin={coin} />
           )) }
        </div>
    )
}