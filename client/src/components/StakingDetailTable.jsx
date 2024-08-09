import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function StakingDetailTable() {
    const { details } = useParams();
    const params = useParams();
    const aDetails = JSON.parse(decodeURIComponent(details));
    const [items, setItems] = useState(aDetails);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Enero es 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    return (
        <div className='p-3'>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 m-2">
                <Link to={`/StakingsDetail-create/${params.id_staking}`} >Nuevo Detalle</Link>
            </a>
            <div className="p-4 bg-gray-900 flex items-center justify-center">
                <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">Fecha</th>
                            <th className="px-4 py-2 text-left">Cantidad</th>
                            <th className="px-4 py-2 text-left">Precio Compra</th>
                            <th className="px-4 py-2 text-left">Ganancia</th>
                            <th className="px-4 py-2 text-left"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {items.map(detail => (

                            <tr className="border-t border-gray-700">
                                <td className="px-4 py-2">{formatDate(detail.created)}</td>
                                <td className="px-4 py-2">{detail.quantity}</td>
                                <td className="px-4 py-2">{detail.price}</td>
                                <td className="px-4 py-2">{detail.quantity_earn}</td>
                                <td className="px-4 py-2">

                                    <a class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 m-2">
                                        <Link to={`/StakingsDetail/${items[0].staking}/${detail.id}`} >Modificar</Link>
                                    </a>
                                    <a class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                                        <Link to={`/StakingsDetail/${items[0].staking}/${detail.id}`} >Eliminar</Link>
                                    </a>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StakingDetailTable;