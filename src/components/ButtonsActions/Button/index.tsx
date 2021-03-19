import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

type ButtonProps = {
  icon: ReactNode;
  text: string;
  iconColor: string;
}

import { ButtonWrapper } from "src/styles/components/ButtonsActions/Button";

function Button({ icon, text, iconColor }: ButtonProps) {
  return (
    <ButtonWrapper iconColor={iconColor}>
      <strong>{ text}</strong>
      <span>{ icon }</span>
    </ButtonWrapper>
  )
}

export default Button;