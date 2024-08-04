import { useEffect, useState } from 'react'
// import { getAllStakings } from '../api/stakings.api';
import { getAllRegisters } from '../api/entidades.api';
import { StakingCard } from './StakingCard';
import { Link, useParams } from "react-router-dom"

export function StakingsList() {

    const [stakings, setStakings] = useState([]);
    const [tipo, setTipo] = useState("");

    const params = useParams();

    useEffect(() => {
        async function loadStakings() {
            let res;

            if (params.type == 1) {
                res = await getAllRegisters('stakings')
            }
            else {
                res = await getAllRegisters('stakingsAuto')
            }
            setStakings(res.data)
            setTipo(params.type);
        }
        loadStakings()
    }, []);



    return (
        <div>

            <div className='p-4'>
                <h1 className='text-center font-semibold text-xl tracking-tight' >{tipo == 1 ? 'Staking Manual' : 'Staking Automatico'}</h1>

            </div>

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