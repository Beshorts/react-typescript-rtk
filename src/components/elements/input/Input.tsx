import React from 'react';

// minimum  settings required for input element => then customize it for every use cases.
// all attributes, inclused new HTML5 are available as proprierty hovering input attributes

export interface FormProps extends React.ComponentPropsWithRef<"form"> {
  formClassName: string,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
}


export interface InputProps extends React.ComponentPropsWithRef<"input">  {
  inputClassName: string,
  type:React.HTMLInputTypeAttribute,
  name: string,
  value: string,
  placeholder: string,
  onChangeInput: React.ChangeEventHandler<HTMLInputElement> ,
  
} 


const Input = ({formClassName, onSubmit, inputClassName, type, name, value, placeholder, onChangeInput}: (InputProps & FormProps) ) => {

    return(
        <>
        <form 
          className={formClassName} 
          onSubmit={onSubmit}
        >
            <input
              className={inputClassName}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChangeInput} 
            />
        </form>
        </>
    )
};

export default Input;

