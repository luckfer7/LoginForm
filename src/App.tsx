import { useForm } from "react-hook-form"
import ButtonSignIn from "./assets/Components/Button"
import Container from "./assets/Components/Container"
import ContainerFather from "./assets/Components/ContainerForm"
import Forms from "./assets/Components/Form"
import InputEmail from "./assets/Components/InputEmail"
import InputSenha from "./assets/Components/InputSenha"
import LoginTitle from "./assets/Components/Title"
import GlobalStyle from "./GlobalStyle"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";



function App() {

  const schema = yup.object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().min(6, "No mínimo seis caracteres").required("Campo obrigatório"),
  }).required();

  const { register, watch, formState: {errors,    isValid} } = useForm({resolver: yupResolver(schema),
      mode: "onBlur",
      reValidateMode: "onChange",

  });

  console.log(errors);

  const email = watch("email", "");
  const senha = watch("password","");
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
          <InputSenha {...register ("password")} />
          <ButtonSignIn />
        </Forms>
        </ContainerFather>
        
      </Container>
      
    </>
  )
}

export default App
