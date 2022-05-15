import React from 'react';
import AddColumnButton from '../../components/AddColumnButton';
import Column from '../../components/Column';

import { WorkSpaceWrapper, WorkSpaceColumns } from './styles'

export default function() {
  return (
    <>
      <WorkSpaceWrapper>
        <WorkSpaceColumns>
          <Column />
          <AddColumnButton />
        </WorkSpaceColumns>
      </WorkSpaceWrapper>
    </>
  )
}