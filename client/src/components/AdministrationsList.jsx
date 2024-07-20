import { useEffect, useState } from 'react'
import { AdministrationCard } from './AdministrationCard';


export function AdministrationsList() {
    
    const [adminitration, setAdministration] = useState([{
        id: 1,
        name: 'Coins',
        description: 'Listado de Coins dados de alta en el sistema',
        image: 'https://www.consejocontribuyentes.org/wp-content/uploads/2022/09/CCBitcoin-distribucion-inmediata-1024x680.jpg',
        url: '/coins/'
    }, {
        id: 2,
        name: 'Blockchains',
        description: 'Listado de Blockchains dados de alta en el sistema',
        image: 'https://www.esic.edu/sites/default/files/rethink/964ba727-blockchain.jpg',
        url: '/blockchains/'
    }]);

    useEffect(() => {
        // async function loadAdministrations() {           
        //     setAdministration(listAdminitrations)
        // }        
        // loadAdministrations()

        //setAdministration(listAdminitrations)
        
    }, []);
   
    return (
        <div>
            
            <div className='grid grid-cols-6 gap-3 p-3'>           
                { 
                    adminitration.map( administration => (                        
                        <AdministrationCard key={administration.id} administration={administration} />
                )) }
            </div>
        </div>
    )
}