import styled from 'styled-components'

export const Footer = styled.div`
  color: #FFF;
`

export const Status = styled.div`
  width: 45px;
  height: 7px;
  margin-right: 4px;

  border-radius: 2px;
  background: ${(props => {
    if (props.status == "canceled") {
      return 'red';
    }

    if (props.status == "completed") {
      return 'green';
    }

    if (props.status == "doing") {
      return 'orange';
    }
  })};
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