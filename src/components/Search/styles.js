import styled from 'styled-components'

export const Form = styled.form`
`

export const Input = styled.input`
  position: fixed;
  left: 0px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  outline: none;
  text-overflow: ellipsis;
  z-index: calc(9);
  border: none;
  background: rgb(75, 78, 90);
  color: rgb(168, 169, 173);
  height: 100px;
  padding-left: calc(3.5vw + 24px);
  width: 100%;
  font-family: 'Poppins',sans-serif;
  font-size: 44px;
  letter-spacing: .11px;
  line-height: 1.2;

  &:focus {
    background-color: rgb(98, 102, 118);
    border-bottom: none;
    color: rgb(249, 249, 249);
    outline: none;
  }

  @media screen and (max-width: 1027px)
  {
    height: 60px;
    font-size: 15px;
  }
`

export const ClearButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: fixed;
  padding: 0px;
  z-index: calc(9);
  opacity: 1;
  transition: all 0.2s ease-out 0s;
  height: 100px;
  right: 20px;
  top: auto;
  color: #fff;

  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;

  @media screen and (max-width: 1027px)
  {
    height: 60px;
  }
`