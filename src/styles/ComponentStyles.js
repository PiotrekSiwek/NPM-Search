import styled from "styled-components";

export const IconWrapper = styled.div`
  text-align: center;
  margin: 10px;
`
export const FormWrapper = styled.div.attrs(props => ({
    width: props.width || "50%"
}))`
  width: ${props => props.width};
  text-align: center;
  margin: 0 auto 40px;
`

export const QueryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`

export const ValidationMessage = styled.div`
  color: orangered;
  font-family: Calibri, sans-serif;
  font-style: italic;
  padding-bottom: 10px;
`
