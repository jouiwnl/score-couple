import styled from 'styled-components'

export const Footer = styled.div`
  color: #FFF;
`

export const HeaderCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const HeaderTitle = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

export const LineStatus = styled.div`
  width: 322px;
  height: 7px;
  background: ${(props => {
    if (props.status == "canceled") {
      return '#FA8072';
    }

    if (props.status == "completed") {
      return '#98FB98';
    }

    if (props.status == "doing") {
      return '#FFE4B5';
    }
  })};
`