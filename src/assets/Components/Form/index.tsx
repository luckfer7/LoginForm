import React from "react";
import { Form } from "./styles";

interface ContainerForm {
    children: React.ReactNode;
}

const Forms: React.FC<ContainerForm> = ({children}) => {
    return <Form>{children}</Form>
}

// function Forms () {
//     return (
//         <Form></Form>
//     )
// }

export default Forms;