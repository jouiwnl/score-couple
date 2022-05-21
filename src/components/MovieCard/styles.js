import styled from 'styled-components'

export const CardWrapper = styled.div`
  max-width: 300px;
  max-height: 450px;
  min-width: 240px;
  min-height: 450px;
  border-radius: 4px;
  background: url(${(props) => props.poster});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all .4s ease-in-out;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  animation: fadeinout 1s linear 1 forwards;
  
  @keyframes fadeinout {
    0% { opacity: 0; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`