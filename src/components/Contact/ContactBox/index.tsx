import { ReactNode } from "react";

import {
  ContactBoxWrapper,
  ContactBoxContainer,
} from "src/styles/components/Contact/ContactBox";

type ContactBoxProps = {
  icon: ReactNode;
  title: string;
  firstDescription: string;
  lastDescription: string;
}

function ContactBox({ icon, title, firstDescription, lastDescription }: ContactBoxProps) {
  return (
    <ContactBoxWrapper>
      <ContactBoxContainer>
        <span>
          { icon }
        </span>
        <h3>{ title }</h3>
        <p>{ firstDescription }</p>
        <p>{ lastDescription }</p>
      </ContactBoxContainer>
    </ContactBoxWrapper>
  )
}

export default ContactBox;
