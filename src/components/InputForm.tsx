import { useState } from "react";

interface InputFormProps {
    type: string,
    name: string,
    value?: string,
    placeholder: string,
    title?: string,
    description?: string,
    handleChange: (event: {target: {name:string, value: string}}) => void,
    className?: string,
    required?: boolean,
    prefixIcon?: JSX.Element,
    suffixIcon?: JSX.Element,
}

const InputForm = ({type, placeholder, name, title, description, handleChange, className, prefixIcon, suffixIcon}: InputFormProps) => {
    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        setFocus(focus => !focus)
    }
    return(
        <div className={`flex ${className} items-center gap-2 lg:gap-5`}>
            {
                title && 
                <div className={`${name === 'expiry_month' ? 'w-full lg:w-[425px]' : 'w-full'} flex justify-between text-start text-[13px] leading-5`}>
                    <label className="flex flex-col space-y-1">
                        <span className="text-sm font-bold">{title}</span>
                        <span>{description}</span>
                    </label>
                </div>
            }
            <div className={`${name === 'expiry_month' ? 'w-full lg:w-auto' : 'w-full'} flex items-center w-full border-2 rounded-lg h-[55px] gap-4 ${focus ? 'border-[#015dfe] text-[#015dfe] bg-[#eef6ff]':'border-[#ecf1f4] bg-white'}`}>
                {prefixIcon && <span className={`pl-4`}>{prefixIcon}</span>}

                <input onFocus={handleFocus} onBlur={handleFocus} name={name} className={`${className} h-full font-medium outline-none rounded-lg ${name === 'expiry_month' || name === 'expiry_year' ? 'p-[inherit]' : 'pl-4'} ${focus && 'bg-[#eef6ff]'}`} type={type} placeholder={placeholder} onChange={(event) => handleChange(event)}/>

                {suffixIcon && <span className={`pr-4`}>{suffixIcon}</span>}
            </div>
        </div>
    )
}
export default InputForm;