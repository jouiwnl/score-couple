import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 500px;
  height: 250px;

  background: #000;

  @media screen and (max-width: 1000px)
  {
    width: 400px;
    height: 250px;
  }

  @media screen and (max-width: 760px)
  {
    width: 300px;
    height: 200px;
  }
`

export const CardHeader = styled.header`
  font-size: 44px;
  text-align: center;
  margin-top: 10px;
  color: #fff;
  
  @media screen and (max-width: 1000px)
  {
    font-size: 30px;
  }

  @media screen and (max-width: 760px)
  {
    font-size: 20px;
  }
`

export const CardBody = styled.div`
  text-align: center;
  padding: 25px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`
