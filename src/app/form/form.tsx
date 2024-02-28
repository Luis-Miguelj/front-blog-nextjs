import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { X } from 'lucide-react'
interface FormAddProps{
  showOrHidden: string
  position: string
  handleFormModal: (valid: boolean) => void
}
export function FormAdd({ position, showOrHidden, handleFormModal }: FormAddProps){

  const [output, setOutput] = useState('')
  const { register, handleSubmit } = useForm()

  function createPost(data: any){
    setOutput(JSON.stringify(data, null, 2))
  }

  return(
    <div className={`absolute ${showOrHidden} top-0 flex items-center justify-center bg-zinc-900 bg-opacity-35 w-full mx-auto h-full text-zinc-950`}>
      <div className="flex-col space-y-5 w-1/3 mx-auto h-4/6 bg-zinc-50 backdrop-blur-sm bg-opacity-90 py-10 px-10 rounded-lg shadow-2xl">
        <div className="container flex justify-end">
          <button className="text-zinc-950 p-1 rounded-md hover:bg-opacity-30 hover:bg-zinc-800 transition-all duration-300" onClick={()=> handleFormModal(false)}><X size={20}/></button>
        </div>
        <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit(createPost)}>
          <div className='flex flex-col w-full gap-2'>
            <span className='text-xs font-medium'>Titulo</span>
            <input type="text" {...register('title')} className="text-zinc-950 shadow-md p-2 rounded" placeholder='Titulo da Postagem...'/>
          </div>
          <div className='flex flex-col w-full gap-2'>
            <span className='text-xs font-medium'>Conteúdo da Postagem</span>
            <textarea rows={8} cols={30} {...register('postagem')} className="text-zinc-950 shadow-md rounded transition-all duration-300 p-2" placeholder='Conteúdo'/>
          </div>
          <button type="submit" className='px-2 py-1 bg-zinc-900 w-52 rounded text-zinc-50 hover:bg-zinc-400 transition-all'>Postar</button>
        </form>
      </div>
    </div>
  )
}