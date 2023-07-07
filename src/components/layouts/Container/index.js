import React from 'react'

import {Containerr} from './styles'

const Container = ({children, quebra="nowrap", display="block"}) => {
  return (
    <Containerr quebra={quebra} display={display}>
        {children}
    </Containerr>
  )
}

export default Container