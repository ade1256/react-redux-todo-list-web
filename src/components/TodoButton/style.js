import styled from "styled-components";

export const FilterBtnWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
`

export const Button = styled.button`
  flex: 1;
  padding: 0.5rem 0;
  font-size: 1.1rem;
  color: #555;
  border: 1px solid #ccc;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: #f9ca24;
    color: #333;
  }
  ${({active}) => active && `
    background: #f9ca24;
    color: #333;
  `}
`