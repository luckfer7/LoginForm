import { forwardRef } from "react";
import { Input } from "./styles";


// interface InputEmailProps {
//     onChange: React.ChangeEventHandler<HTMLInputElement>;
//     onBlur: React.FocusEventHandler<HTMLInputElement>;
//     ref: React.RefCallback<HTMLInputElement>;
//     name: string;
// }

const InputEmail = forwardRef<HTMLInputElement>((props, ref) => (
    <Input 
        type="email" 
        {...props}
        ref={ref}
        placeholder="Digite seu email"
         
    />
));

// const InputEmail = forwardRef(({onChange, onBlur, name}), ref) => {
//     return (
//          <Input 
//             type="email"
//             name={name}
//             onChange={onChange}
//             onBlur={onBlur}
//             ref={ref}
//             placeholder="Digite seu email"
//         />
//     )
// }   


export default InputEmail;



