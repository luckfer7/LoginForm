import { useForm } from "react-hook-form"
import ButtonSignIn from "./assets/Components/Button"
import Container from "./assets/Components/Container"
import ContainerFather from "./assets/Components/ContainerForm"
import Forms from "./assets/Components/Form"
import InputEmail from "./assets/Components/InputEmail"
import InputSenha from "./assets/Components/InputSenha"
import LoginTitle from "./assets/Components/Title"
import GlobalStyle from "./GlobalStyle"


function App() {

  const { register, watch, formState: {errors, isValid} } = useForm();

  const email = watch("email", "");
  const senha = watch("senha","");
  console.log({email, senha})

  // const form = watch();
  // console.log(form);

  return (
    <>
      <GlobalStyle />
      <Container>
        <LoginTitle />
        <ContainerFather>
          <Forms>
          <InputEmail {... register("email")} />
          <InputSenha {...register ("senha")} />
          <ButtonSignIn />
        </Forms>
        </ContainerFather>
        
      </Container>
      
    </>
  )
}

export default App
