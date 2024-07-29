import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { updateRegister, createRegister, getRegister, deleteRegister } from '../api/entidades.api'
import { toast } from 'react-hot-toast'

const BlockchainFormPage = (props) => {

    const { register,
        handleSubmit,
        formState: {
            errors
        },
        setValue } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateRegister('blockchains', params.id, data)
            toast.success('Blockchain Actualizado', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            });
        } else {
            await createRegister('blockchains', data)
            toast.success('Se creó el nuevo blockchain', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            });
        }

        navigate('/blockchains');
    })

    useEffect(() => {
        const loadBlockchain = async () => {
            if (params.id) {
                const { data: { name, description, webSite, image, blockScan } } = await getRegister('blockchains', params.id)
                setValue('name', name);
                setValue('description', description);
                setValue('webSite', webSite);
                setValue('blockScan', blockScan);
                setValue('image', image);
            }
        }
        loadBlockchain();
    }, []);

    return (
        <div className='max-w-xl mx-auto my-3'>
            <form onSubmit={onSubmit} >
                <input type="text" placeholder="Ingrese un nombre de Blockchain"
                    {...register("name", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                {errors.name && <span>Este campo es requerido</span>}

                <input type="text" placeholder="Ingrese url de la imagen"
                    {...register("image", { required: false })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />

                <input type="text" placeholder="Ingrese url del Sitio Web"
                    {...register("webSite", { required: false })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />

                <input type="text" placeholder="Ingrese url de la Cadena de Bloques"
                    {...register("blockScan", { required: false })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />

                <textarea rows="3" placeholder="Ingrese una nota"
                    {...register("description", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                ></textarea>
                {errors.description && <span>Este campo es requerido</span>}

                <button
                    className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'
                >Grabar</button>
            </form>

            {params.id && <button
                className='bg-red-500 p-3 rounded-lg block w-full mt-3'
                onClick={async () => {
                    const accepted = window.confirm("Confirma eliminación ?")
                    if (accepted) {
                        await deleteRegister(params.id, 'blockchains')
                        toast.success('Blockchain Eliminado', {
                            position: 'bottom-right',
                            style: {
                                background: '#101010',
                                color: '#fff'
                            }
                        })
                        navigate('/blockchains');
                    }
                }} >Delete</button>}
        </div>
    );
}

export default BlockchainFormPage;