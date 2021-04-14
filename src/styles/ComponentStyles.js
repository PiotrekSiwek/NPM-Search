import styled from "styled-components";

export const IconWrapper = styled.div`
  text-align: center;
  margin: 10px;
`
export const FormWrapper = styled.div.attrs(props=>({
    width: props.width || "50%"
}))`
  width: ${props => props.width};
  text-align: center;
  margin: 0 auto 40px;
`
