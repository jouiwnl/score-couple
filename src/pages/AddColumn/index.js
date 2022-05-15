import React from 'react'
import AddColumnForm from '../../components/AddColumnForm'
import AddColumnHeader from '../../components/AddColumnHeader'

import { Wrapper } from './styles'

export default function() {
  return (
    <>
      <Wrapper>
        <AddColumnHeader />
        <AddColumnForm />
      </Wrapper>
    </>
  )
}