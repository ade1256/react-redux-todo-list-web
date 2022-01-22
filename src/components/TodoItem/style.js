import styled from 'styled-components'

export const TodoItemWrapper = styled.li`
  margin: 0 -3rem 4px;
  padding: 1.1rem 3rem;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`

export const TodoItemContent = styled.div`
  max-width: 65%;
  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    word-break: break-all;
    transition: all .6s;

    ${({isDone}) => isDone && `
      opacity: 0.4;
      text-decoration: line-through;
      font-style: italic;
    `}
  }
  input {
    max-width: 90%;
    font-size: 1.1rem;
    padding: 0.1rem;
  }
`

export const TodoItemAction = styled.div`
  display: flex;
  align-items: center;
  button {
    outline: none;
    border: none;
    background: transparent;
    margin: 0 0.5rem;
    color: #fff;
    font-size: 1.5rem;
    margin-top: -0.4rem;
    cursor: pointer;
    &:first-child {
      transform: translateY(2%) scale(1.05);
    }
    &:last-child {
      transform: translateY(-1%) scale(1.05);
    }
    &:hover {
      transform: scale(1.2);
    }
  }
`