import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createRegister, deleteRegister, updateRegister, getRegister } from '../api/entidades.api';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function CoinFormPage() {

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
      await updateRegister('coins', params.id, data);
      toast.success('Coin Actualizada', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      });
    } else {
      await createRegister('coins', data);
      toast.success('Se creó la nueva coin', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      })
    }

    navigate('/coins');
  })

  useEffect(() => {
    async function loadCoin() {
      if (params.id) {
        const { data: { name, description, webSite, image } } = await getRegister('coins', params.id)
        setValue('name', name);
        setValue('description', description);
        setValue('webSite', webSite);
        setValue('image', image);
      }
    }
    loadCoin();

  }, [])

  return (
    <div className='max-w-xl mx-auto my-3'>

      <form onSubmit={onSubmit} >
        <input type="text" placeholder="Ingrese un nombre de moneda"
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
            await deleteRegister(params.id, 'coins')
            toast.success('Coin Eliminada', {
              position: 'bottom-right',
              style: {
                background: '#101010',
                color: '#fff'
              }
            })
            navigate('/coins');
          }
        }} >Delete</button>}

    </div>
  )
}