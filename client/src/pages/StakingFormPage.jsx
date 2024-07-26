import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createStakings, deleteStakings, updateStakings, getStakings } from '../api/stakings.api';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function StakingFormPage() {

    const { register,
        handleSubmit,
        formState: {
            errors },
        setValue
    } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {

        if (params.id) {
            await updateStakings(params.id, data);
            toast.success('Staking Actualizado', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            });
        } else {
            await createStakings(data);
            toast.success('Se creó el nuevo staking', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            })
        }

        navigate('/stakings');
    })

    useEffect(() => {
        async function loadStaking() {
            if (params.id) {
                const { data: { name, description, webSite, image } } = await getStakings(params.id)
                setValue('name', name);
                setValue('description', description);
                setValue('webSite', webSite);
                setValue('image', image);
            }
        }
        loadStaking();
    }, [])

    return (
        <div className='max-w-xl mx-auto my-3'>

            <form onSubmit={onSubmit} >
                <input type="text" placeholder="Ingrese un nombre de Staking"
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
                        await deleteStakings(params.id)
                        toast.success('Staking Eliminado', {
                            position: 'bottom-right',
                            style: {
                                background: '#101010',
                                color: '#fff'
                            }
                        })
                        navigate('/stakings');
                    }
                }} >Delete</button>}

        </div>
    )
}