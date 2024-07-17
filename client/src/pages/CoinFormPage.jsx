import { useEffect } from 'react' 
import { useForm } from 'react-hook-form'
import { createCoin, deleteCoin, updateCoin, getCoin } from '../api/coins.api';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function CoinFormPage() {
  
  const { register, 
          handleSubmit, 
          formState: {
            errors}, 
          setValue
        } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit( async (data) => {
    
    if(params.id) {
      await updateCoin(params.id, data);
      toast.success('Coin Actualizada', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: '#fff'
        }
      });
    } else {
      await createCoin(data);
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
      if(params.id) {
        const {data: {name, description}} = await getCoin(params.id)
        setValue('name', name);
        setValue('description', description);
      }
    }
    loadCoin();
    
  }, [])

  return(
      <div className='max-w-xl mx-auto'>

        <form  onSubmit={onSubmit} >
          <input type="text" placeholder="Ingrese un nombre de moneda"           
          {...register("name", {required: true})}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          />
          {errors.name && <span>Este campo es requerido</span>}

          <textarea rows="3" placeholder="Ingrese una nota"          
          {...register("description", {required: true})}
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
          if(accepted) {
            await deleteCoin(params.id)
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