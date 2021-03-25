import { TextAreaWrapper } from "src/styles/components/AppointmentForm/TextArea";

type TextAreaProps = {
  name: string;
  placeholder: string;
}

function TextArea({ name, placeholder }: TextAreaProps) {
  return (
    <TextAreaWrapper
        name={name} 
        placeholder={placeholder} >
    </TextAreaWrapper>
  )
}

export default TextArea;