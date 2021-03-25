import { ReactNode } from "react";
import { InputWrapper } from "src/styles/components/AppointmentForm/Input";

type InputProps = {
  name: string;
  inputType: string;
  placeholder: string;
  icon: ReactNode;
}

function Input({ name, inputType, placeholder, icon }: InputProps) {
  return (
    <InputWrapper>
      <input 
        name={name} 
        type={inputType} 
        placeholder={placeholder} />
      <span>
        { icon }
      </span>
    </InputWrapper>
  )
}

export default Input;