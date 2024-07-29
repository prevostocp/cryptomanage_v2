import { useEffect, useState } from 'react';
import { getAllRegisters } from '../api/entidades.api';
import { BlockchainCard } from './BlockchainCard';
import { Link } from 'react-router-dom';

export function BlockchainsList() {

    const [blockchains, setBlockchains] = useState([]);

    useEffect(() => {
        async function loadBlockchains() {
            const res = await getAllRegisters('blockchains')
            console.log(res)
            setBlockchains(res.data);
        }
        loadBlockchains();
    }, []);

    return (
        <div>
            <div className="my-4">
                <a className="my-4 bg-sky-600 text-indigo-200 hover:text-white">
                    <Link to="/blockchains-create" >New Blockchain</Link>
                </a>
            </div>

            <div className='grid grid-cols-6 gap-3'>
                {
                    blockchains.map(blockchain => (
                        <BlockchainCard key={blockchain.id} blockchain={blockchain} />
                    ))}
            </div>
        </div>
    );
}

