
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

import toast, { Toaster } from 'react-hot-toast';


export function App() {
  const cadastroUserSchema = z.object({
    name: z.string().nonempty('Nome é obrigatório!'),
    email: z.string().nonempty('E-mail é obigatório').email('Formato de e-mail inválido!'),
    telefone: z.coerce.number(),
    cargo: z.string(),
    gitHub: z.string(),
    linkdIn: z.string()
  })

  type userProps = z.infer<typeof cadastroUserSchema>

  const { register, handleSubmit, formState: { errors } } = useForm<userProps>({
    resolver: zodResolver(cadastroUserSchema)
  })

  function createUser(data: userProps){
    console.log(data)
    localStorage.setItem("@user", JSON.stringify([data]))
    
    toast.success('Cadastro realizado com sucesso!', {
      position: 'top-right',
    })
  }
  return (
    <div className='flex items-center justify-center'>
      <form onSubmit={handleSubmit(createUser)} className='w-[600px] flex flex-col gap-1 pt-10 shadow p-10 rounded-lg mt-5'>
          <h1 className='text-2xl font-bold mb-10 text-center'>Fromulario de cadastro</h1>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name" className='text-sm text-gray-500'>Nome Completo:</label>
            <input className='w-full h-[50px] border rounded-xl p-4' id='name' placeholder='Digite seu nome...' {...register('name')} />
            {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className='text-sm text-gray-500'>E-mail</label>
            <input className='w-full h-[50px] border rounded-xl p-4' id='email' placeholder="Digite seu e-mail" {...register('email')} />
            {errors.email && <span className= "text-red-400">{errors.email.message}</span>}
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="telefone" className='text-sm text-gray-500'>Telefone</label>
            <input className='w-full h-[50px] border rounded-xl p-4' id='telefone' placeholder="Digite seu Telefone" {...register('telefone')}/>
            {errors.telefone && <span className= "text-red-400">{errors.telefone.message}</span>}
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="cargo" className='text-sm text-gray-500'>Selecione o cargo pretendido:</label>
            <select id="cargo" {...register('cargo')} className='h-[50px] border rounded-xl p-3'>
            <option value="0">Cargo</option>
              <option value="Frontend">Desenvolvedor Frontend</option>
              <option value="Backend">Desenvolvedor Backend</option>
              <option value="Full Stack">Desenvolvedor Full Stack</option>
              <option value="Mobile">Desenvolvedor Mobile</option>
              <option value="Desenvolvedor de Software">Desenvolvedor de Software</option>
              <option value="Engenheiro de Software">Engenheiro de Software</option>
              <option value="Arquiteto de Software">Arquiteto de Software</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Analista de Sistemas">Analista de Sistemas</option>
              <option value="Analista Programador">Analista Programador</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="Engenheiro de Dados">Engenheiro de Dados</option>
              <option value="1QA Engineer">QA Engineer</option>
              <option value="Scrum Master">Scrum Master</option>
              <option value="Product Owner">Product Owner</option>
            </select>
            {errors.cargo &&  <span className= "text-red-400">{errors.cargo.message}</span>}
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="github" className='text-sm text-gray-500'>GitHub</label>
            <input className='w-full h-[50px] border rounded-xl p-4' id='github' placeholder="Digite seu github" {...register('gitHub')}/>
            {errors.gitHub && <span className= "text-red-400">{errors.gitHub.message}</span>}
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="linkdin" className='text-sm text-gray-500'>Linkdin</label>
            <input className='w-full h-[50px] border rounded-xl p-4' id='linkdin' placeholder="Digite seu linkdin" {...register('linkdIn')}/>
            {errors.linkdIn && <span className= "text-red-400">{errors.linkdIn.message}</span>}
          </div>
           <Toaster />
            <button type="submit" className='w-full h-14 border rounded-full shadow mt-10 bg-green-500 text-white font-bold hover:bg-green-400'>Enviar</button>
      </form>
    </div>
  )
}

