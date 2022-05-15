import React from 'react'
import AddCardForm from '../../components/AddCardForm'
import AddCardHeader from '../../components/AddCardHeader'

import { Wrapper } from './styles'

export default function() {
  return (
    <>
      <Wrapper>
        <AddCardHeader />
        <AddCardForm />
      </Wrapper>
    </>
  )
}