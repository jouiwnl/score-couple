import React from 'react';
import Column from '../../components/Column';

import { WorkSpaceTitle, WorkSpaceWrapper, WorkSpaceColumns } from './styles'

export default function() {
  return (
    <>
      <WorkSpaceWrapper>
        <WorkSpaceTitle>
            Teste
        </WorkSpaceTitle>
        <WorkSpaceColumns>
          <Column />
        </WorkSpaceColumns>
      </WorkSpaceWrapper>
    </>
  )
}