import ButtonSignIn from "./assets/Components/Button"
import Container from "./assets/Components/Container"
import ContainerFather from "./assets/Components/ContainerForm"
import Forms from "./assets/Components/Form"
import InputEmail from "./assets/Components/InputEmail"
import InputSenha from "./assets/Components/InputSenha"
import LoginTitle from "./assets/Components/Title"
import GlobalStyle from "./GlobalStyle"

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <LoginTitle />
        <ContainerFather>
          <Forms>
          <InputEmail />
          <InputSenha />
          <ButtonSignIn />
        </Forms>
        </ContainerFather>
        
      </Container>
      
    </>
  )
}

export default App
