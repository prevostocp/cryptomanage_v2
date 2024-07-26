import { useState } from 'react';
import { InvestCard } from './InvestCard';

export function InvestsList() {

    const [invest, setInvest] = useState([{
        id: 1,
        name: 'Staking Manual',
        description: 'Lista de Inversiones de Staking Manual',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85CjZkitWclg09QiAmlkwXoAyNRYPWhdkCu2sCgaisR5gaEc_mC0-2xAqBNea3zLiT9I&usqp=CAU',
        url: '/Stakings'
    }, {
        id: 2,
        name: 'Staking Automático',
        description: 'Lista de Inversiones de Staking Autoático',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR302tvaJoWoLMiwMiZze7N2AjUDDSVMESPZBy-3yip9TfFb0CTwLz-dm6NMULIFP8Kxs&usqp=CAU',
        url: '/Stakings'
    }]);

    return (
        <div>
            <div className='grid grid-cols-6 gap-3 p-3'>
                {
                    invest.map(invest => (
                        <InvestCard key={invest.id} invest={invest} />
                    ))}
            </div>
        </div>
    )
}