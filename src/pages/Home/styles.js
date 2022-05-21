import styled from 'styled-components';

export const Main = styled.main`
  padding: 0;
  display: flex;

  flex-direction: column;
  align-items: center;
`

export const WorkSpaceWrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  padding: 20px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`

export const WorkSpaceTitle = styled.h1`
  color: #000;
  padding: 10px;
`

export const WorkSpaceColumns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: auto;

  padding: 20px;
  padding-bottom: 50px;

  ::-webkit-scrollbar
  {
    height: 0px;
  }
`

export const LoadingWrapper = styled.div`
    height: 25vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`