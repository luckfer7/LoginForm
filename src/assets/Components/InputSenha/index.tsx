import { Input } from "./styles";
import { forwardRef } from "react";

// interface InputSenhaProps {
//     onChange: React.ChangeEventHandler<HTMLInputElement>;
//     onBlur: React.FocusEventHandler<HTMLInputElement>;
//     ref: React.RefCallback<HTMLInputElement>;
//     name: string;
// }

const InputSenha = forwardRef<HTMLInputElement>((props, ref) => (
    <Input 
        type="password" 
        ref={ref} 
        {...props} 
        placeholder="Digite sua senha" 
    />
));

// const InputSenha: React.FC<InputSenhaProps> = ({onChange, onBlur, name}, ref) => {
//     return (
//         <Input
//             type="password"
//             name={name}
//             onChange={onChange}
//             onBlur={onBlur}
//             ref={ref}
//             placeholder="Digite sua senha"
//         />
//     )
// }

export default InputSenha;