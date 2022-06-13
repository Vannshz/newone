import React from 'react'
import IconButton from "@mui/material/IconButton";

interface Props {
    children: React.ReactNode;
    type?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const IconButtonComponent = (props: Props) => {
  return (
    <IconButton
      role="iconButton"
      onClick={props.onClick}
      edge={props.type === "account" ? "end" : false}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </IconButton>
  )
}

export default IconButtonComponent