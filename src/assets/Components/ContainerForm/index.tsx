import { FatherContainer } from "./styles";

import React from "react";

interface ContainerFather {
    children: React.ReactNode;
}

const ContainerFather: React.FC<ContainerFather> = ({children}) => {
    return <FatherContainer>{children}</FatherContainer>
}

export default ContainerFather;