import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"

import {
  DoctorBoxWrapper,
  DoctorBoxImage,
  DoctorBoxContent,
  DoctorBoxText,
  DoctorBoxIcons,
  DoctorBoxButton,
} from "src/styles/components/Doctors/DoctorBox";

type DoctorBoxProps = {
  image: string;
  name: string;
  job: string;
}

function DoctorBox({ image, name, job }: DoctorBoxProps) {
  return (
    <DoctorBoxWrapper>
      <DoctorBoxImage>
        <img src={image} />
      </DoctorBoxImage>
      <DoctorBoxContent>
        <DoctorBoxText>
          <h3>{ name }</h3>
          <p>{ job }</p>
        </DoctorBoxText>
        <DoctorBoxIcons>
          <span><FiTwitter size="100%"/></span>
          <span><FiInstagram size="100%"/></span>
          <span><FiLinkedin size="100%"/></span>
          <span><FiFacebook size="100%"/></span>
        </DoctorBoxIcons>
        <DoctorBoxButton>
          View Profile
        </DoctorBoxButton>
      </DoctorBoxContent>
    </DoctorBoxWrapper>
  )
}

export default DoctorBox;