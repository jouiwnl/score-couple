import styled from 'styled-components'

export const Footer = styled.div`
  color: #FFF;
`

export const Wrapper = styled.div`
  transition: all .4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`

export const CardWrapper = styled.div`
  min-height: 125px;
  display: flex;
`

export const LeftSide = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 35%;
  min-height: inherit;
`

export const RightSide = styled.div`
  width: 65%;
  background: #000;
  min-height: inherit;
  position: relative;
`

export const RightSideHeader = styled.header`
  text-align: center;
  margin-top: 5px;
  width: 100%;
  color: #fff;
`

export const RightMovieInformation = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
`

export const MovieAvaliation = styled.div`
  display: flex;
  margin-top: 19px;
  color: #FFFF00;

  .MuiRating-icon {
    color: #faaf00;
  }
  
  svg {
    font-size: x-large;
  }
`

export const MovieFooter = styled.footer`
  width: 90%;
  bottom: 0;
  position: absolute;
  margin-bottom: 10px;
  height: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const AditionalInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Information = styled.span`
  font-size: 12px;
  font-weight: 200;
`

export const LineStatus = styled.div`
  width: 322px;
  height: 7px;
  background: ${(props => {
    if (props.status == "CANCELED") {
      return '#FA8072';
    }

    if (props.status == "COMPLETED") {
      return '#98FB98';
    }

    if (props.status == "DOING") {
      return '#FFE4B5';
    }

    if (props.status == "NOTSTARTED") {
      return '#464646';
    }
  })};
`