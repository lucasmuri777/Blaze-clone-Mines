import React from 'react'

import {Containerr} from './styles'

const Container = ({children, quebra="nowrap"}) => {
  return (
    <Containerr quebra={quebra}>
        {children}
    </Containerr>
  )
}

export default Container