import React from 'react'
import Blinkist from '../../../images/logo.svg';

interface Props {
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Icons = (props: Props) => {
  return (
    <img src={Blinkist} alt="Logo" className={props.className} />
  )
}

export default Icons