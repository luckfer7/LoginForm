import React from "react";
import { ContainerLogin } from "./styles";


interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return <ContainerLogin>{children}</ContainerLogin>
}

// function Container () {
//     return (
//         <ContainerLogin>

//         </ContainerLogin>
//     )
// }

export default Container;