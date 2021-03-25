import { FiSend } from "react-icons/fi";

import { ButtonWrapper } from "src/styles/components/AppointmentForm/Button";

type ButtonProps = {
  onClick: () => void;
}

function Button({ onClick }: ButtonProps) {
  return (
    <ButtonWrapper onClick={onClick}>
      <strong>Submit</strong>
      <span>
        <FiSend size="100%" />
      </span>
    </ButtonWrapper>
  )
}

export default Button;