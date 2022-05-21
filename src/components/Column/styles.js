import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 322px;
`

export const ColumnTitle = styled.div`
  color: #FFF;
  width: inherit;
  display: flex;
  margin-bottom: 10px;
  height: 40px;

  border-radius: 10px;
  background: #000;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const Title = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-left: 4px;

  color: #FFF;
`

export const ColumnBody = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 15px;
  padding: 10px;

  ::-webkit-scrollbar {
    width: 0;
  }
`