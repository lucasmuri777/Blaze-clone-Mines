import React from 'react'
import {Input} from "./styles"

const Inputt = ({type, placeholder, value, onChange}) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Inputt