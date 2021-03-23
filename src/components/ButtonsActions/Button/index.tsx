import { ReactNode } from "react";

import { ButtonWrapper } from "src/styles/components/ButtonsActions/Button";

type ButtonProps = {
  icon: ReactNode;
  text: string;
  iconColor: string;
}

function Button({ icon, text, iconColor }: ButtonProps) {
  return (
    <ButtonWrapper iconColor={iconColor}>
      <strong>{ text}</strong>
      <span>{ icon }</span>
    </ButtonWrapper>
  )
}

export default Button;