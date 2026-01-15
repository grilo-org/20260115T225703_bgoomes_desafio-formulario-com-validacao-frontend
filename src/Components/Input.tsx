import { InputHTMLAttributes } from "react"

type inputProps = InputHTMLAttributes<HTMLInputElement> 

export function Input({ id, type = 'text', ...rest }: inputProps){
    return (
        <input className='w-full h-[50px] border rounded-xl p-4' id={id} type={type} {...rest} />
    )
}

