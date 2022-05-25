import styled from 'styled-components'

export const Wrapper = styled.div`
`

export const CardWrapper = styled.div`
  width: 1200px;
  height: 600px;
  overflow: hidden;
  display: flex;

  @media screen and (max-width: 1270px)
  {
    width: 900px;
    height: 500px;
  }

  @media screen and (max-width: 1000px)
  {
    width: 700px;
    height: 400px;
  }

  @media screen and (max-width: 760px)
  {
    width: 500px;
    height: 300px;
  }

  @media screen and (max-width: 500px)
  {
    width: 310px;
    height: 500px;

    flex-direction: column;
  }
`

export const LeftWrapper = styled.div`
  width: 30%;
  background-image: url(${(props) => props.image});
  background-size: cover;

  @media screen and (max-width: 500px)
  {
    width: 100%;
    height: 30%;
  }
`

export const RightWrapper = styled.div`
  width: 70%;
  background: #000;

  @media screen and (max-width: 500px)
  {
    width: 100%;
    height: 70%;
  }
`

export const RightSideHeader = styled.header`
  text-align: start;
  margin-top: 5px;
  margin-left: 30px;
  font-size: 44px;
  font-weight: 400;
  color: #FFF;

  @media screen and (max-width: 1000px)
  {
    font-size: 30px;
  }

  @media screen and (max-width: 760px)
  {
    font-size: 20px;
  }

  @media screen and (max-width: 500px)
  {
    text-align: center;
    margin-left: 0;
    font-size: 20px;
  }
`

export const MovieInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  margin-top: 15px;
`

export const Information = styled.span`
  font-size: 20px;
  font-weight: 100;
  opacity: 0.6;

  @media screen and (max-width: 1000px)
  {
    font-size: 20px;
  }

  @media screen and (max-width: 760px)
  {
    font-size: 15px;
  }
`

export const MovieAvaliationDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFFF00;
  overflow: auto;
  height: 200px;
  margin-top: 30px;

  span {
    font-size: 20px;
    font-weight: 100;
    
    @media screen and (max-width: 1250px)
    {
      font-size: 15px;
    }

    @media screen and (max-width: 1000px)
    {
      font-size: 15px;
    }

    @media screen and (max-width: 760px)
    {
      font-size: 10px;      
    }
  }

  @media screen and (max-width: 1200px)
  {
    margin-top: 0;
  }

  @media screen and (max-width: 1000px)
  {
    font-size: 40px;
    margin-top: 0;
  }

  @media screen and (max-width: 760px)
  {
    font-size: 30px;
    margin-top: 10px;
    height: 150px;
  }
  
  svg {
    font-size: 30px;

    @media screen and (max-width: 1000px)
    {
      font-size: 25px;
    } 

    @media screen and (max-width: 760px)
    {
      font-size: 25px;
    }
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`

export const ButtonWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding-right: 23%;
  padding-left: 23%;
  margin-top: 20px;

  @media screen and (max-width: 760px)
  {
    padding: 0;
  }

  button {
    font-size: 25px;
    font-weight: 500;

    @media screen and (max-width: 1270px)
    {
      font-size: 20px;
      font-weight: 500;
    }

    @media screen and (max-width: 1000px)
    {
      font-size: 17px;
      font-weight: 500;
    }

    @media screen and (max-width: 760px)
    {
      font-size: 12px;
      font-weight: 700;
    }
  }
`

export const StatusWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 1270px)
  {
    margin-top: 10px;
  }
`