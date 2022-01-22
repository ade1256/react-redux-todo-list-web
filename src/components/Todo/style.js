import styled from "styled-components";

export const TodoItemList = styled.ul`
  margin: 3rem 0 1.5rem;
  padding: 0;
`

export const TodoFooter = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  font-size: 1rem;
  padding: .4rem .8rem;
  color: #555;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: .1rem .1rem .1rem #999;
  cursor: pointer;
  &.active {
    transform: translateY(.2rem);
    box-shadow: none;
    transform: scale(1.05);
  }
  &:hover {
    background: #f9ca24;
    color: #333;
  }
`