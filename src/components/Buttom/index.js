import React from 'react'
import {Button} from './styles'

const Buttomm = ({Text, onClick, Type = "button"}) => {
  return (
    <Button type={Type} onClick={onClick}>
      {Text}
    </Button>
  )
}

export default Buttomm