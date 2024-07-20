import { useEffect, useState } from 'react'
import { getAllCoins } from '../api/coins.api';
import { CoinCard } from './CoinCard';
import { Link } from "react-router-dom"

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
        <div>
            <div className="my-4">
                <a className="my-4 bg-sky-600 text-indigo-200 hover:text-white">
                    <Link to="/coins-create" >New Coin</Link> 
                </a>
            </div>
            
            
            <div className='grid grid-cols-6 gap-3'>
           
                { coins.map( coin => (
                    <CoinCard key={coin.id} coin={coin} />
                )) }
            </div>
        </div>

        
        
    )
}