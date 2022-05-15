import styled from 'styled-components';

export const Main = styled.main`
  padding: 0;
  display: flex;

  flex-direction: column;
  align-items: center;
`

export const WorkSpaceWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;

  overflow-y: auto;
`

export const WorkSpaceTitle = styled.h1`
  color: #000;
  padding: 10px;
`

export const WorkSpaceColumns = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: auto;

  padding: 20px;
`