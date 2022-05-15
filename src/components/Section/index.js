import React from 'react';

import SectionTitle from './SectionTitle'
import { SectionWrapper, SectionBodyWrapper } from './styles';
import CardWorkSpace from '../CardWorkSpace'
import AddSection from '../AddSection';

export default function() {
  return (
    <>
      <SectionWrapper>
        <SectionTitle />
        <SectionBodyWrapper>
          <CardWorkSpace />
          <CardWorkSpace />
          <CardWorkSpace />
          <AddSection />
        </SectionBodyWrapper>
      </SectionWrapper>
    </>
  )
}