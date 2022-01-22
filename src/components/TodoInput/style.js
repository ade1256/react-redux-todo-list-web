import styled from "styled-components";

export const TodoInputWrapper = styled.form`
  margin: 2rem 0 3rem;
  justify-content: space-between;
  .input-wrapper {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 8px;
    label {
      position: relative;
      width: 100%;
      font-size: 14px;
      display: block;
    }
  }
`

export const Input = styled.input`
  width: 60%;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  outline: none;
  border: none;
  flex-grow: 1;
  background: #fff;
`

export const Button = styled.button`
  font-size: 1rem;
  padding: 24px;
  flex-grow: 1;
  background: #fff;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background: #333;
    transition: all 0.5s;
  }
  &:active {
    transform: scale(1.05);
  }
`