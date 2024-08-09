import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createRegister, deleteRegister, updateRegister, getRegister } from '../api/entidades.api';
import { toast } from 'react-hot-toast'

const StakingDetailFormPage = (props) => {

    const [valueInput, setValueInput] = useState();

    const { register,
        handleSubmit,
        formState: {
            errors
        },
        setValue
    } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateRegister('stakingsDetails', params.id, data);
            toast.success('Detalle Actualizado', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            });
        } else {
            data.staking = params.id_staking;
            await createRegister('stakingsDetails', data);
            toast.success('Se creó nuevo detalle', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                }
            })
        }

        navigate(`/stakings/1`);
    })

    useEffect(() => {
        async function loadStakingDetail() {

            if (params.id) {
                const { data: { quantity, price, staking } } = await getRegister('stakingsDetails', params.id)
                setValue('quantity', quantity);
                setValue('price', price);
            }
        }
        loadStakingDetail();
    }, []);

    const handleChange = (e) => {
        const regex = /^\d*\.?\d{0,8}$/;
        if (regex.test(e.target.value) || e.target.value === '') {
            setValueInput(e);
        }
    }

    return (
        <div className='max-w-xl mx-auto my-3'>

            <form onSubmit={onSubmit}>
                <input type="number" placeholder="Ingrese una cantidad" step="0.00000001" value={valueInput} onChange={handleChange}
                    {...register("quantity", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                {errors.name && <span>Este campo es requerido</span>}

                <input type="number" placeholder="Ingrese un precio" step="0.00000001" value={valueInput} onChange={handleChange}
                    {...register("price", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                {errors.name && <span>Este campo es requerido</span>}

                <button
                    className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'
                >Grabar
                </button>

            </form>

            {params.id && <button
                className='bg-red-500 p-3 rounded-lg block w-full mt-3'
                onClick={async () => {
                    const accepted = window.confirm("Confirma eliminación ?")
                    if (accepted) {
                        await deleteRegister(params.id, 'stakingsDetails')
                        toast.success('Detalle Eliminado', {
                            position: 'bottom-right',
                            style: {
                                background: '#101010',
                                color: '#fff'
                            }
                        })
                        navigate(`/stakings/1`);
                    }
                }} >Delete</button>}
        </div>
    );
}

export default StakingDetailFormPage;