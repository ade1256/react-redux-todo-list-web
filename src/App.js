import './App.css'
import styled from 'styled-components'
import { Todo } from './components'

const Container = styled.div`
  margin: 4rem auto;
  padding: 2rem 3rem 0;
  max-width: 700px;
  color: #fff;
  background: #751c86;
  border-radius: 8px;
  border: 1px solid #ccc;
`

const Header = styled.header`
  h1 {
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    margin-bottom: 0.6rem;
    border-bottom: 1px solid #ccc;
  }

  span {
    display: block;
    font-size: 0.8rem;
    font-weight: 300;
    margin-bottom: 0.7rem;
    margin-top: 0.2rem;
  }
` 

const Footer = styled.footer`
  letter-spacing: 0.05rem;
  background: #751c86;
  text-align: center;
  margin-top: 3rem;
  padding: 0.1rem 0.5rem;

  span {
    display: block;
    font-size: .9rem;
    font-weight: 300;
    margin-bottom: 0.7rem;
    margin-top: 0.2rem;
  }

  a {
    color: #f9ca24;
    text-decoration: none;
    font-weight: 700;
    font-style: italic;
  }
`

function App() {
  return (
    <Container>
      <Header>
        <h1>Todo List
          <span>Daftar list todo pengingat kegiatan</span>
        </h1>
      </Header>
      <Todo />
      <Footer>
        <span>Majoo</span>
      </Footer>
    </Container>
  );
}

export default App;
