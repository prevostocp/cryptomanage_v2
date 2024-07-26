import { useEffect, useState } from 'react'
import { getAllStakings } from '../api/stakings.api';
import { StakingCard } from './StakingCard';
import { Link } from "react-router-dom"

export function StakingsList() {

    const [stakings, setStakings] = useState([]);

    useEffect(() => {
        async function loadStakings() {
            const res = await getAllStakings()
            setStakings(res.data)
        }
        loadStakings()
    }, []);

    return (
        <div>
            <div className="my-4">
                <a className="my-4 bg-sky-600 text-indigo-200 hover:text-white">
                    <Link to="/stakings-create" >New Staking</Link>
                </a>
            </div>

            <div className='grid grid-cols-6 gap-3'>
                {stakings.map(staking => (
                    <StakingCard key={staking.id} staking={staking} />
                ))}
            </div>
        </div>
    )
}