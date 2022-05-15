import styled from 'styled-components'

export const SectionWrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 30px;
`

export const SectionBodyWrapper = styled.div`
  width: 100%;
  padding: 15px;

  display: flex;
  align-items: center;
  overflow-x: auto;

  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar
  {
    height: 7px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }
`