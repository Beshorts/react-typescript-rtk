import React, { useState } from "react";
import Button from "../../components/elements/Button";
import Heading from "../../components/elements/Heading";
import { Form, InputForm, Wrapper } from "./index.styles";


const Register = () => {

    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPwd, setConfirmPwd] = useState<string>("");


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        {/**const data = new FormData(event.target as HTMLFormElement)
    
        try {
          const response = await fetch(FORM_URL, {
            method: "post",
            body: data,
            headers: {
              accept: "application/json",
            },
          })
    
          setEmail("")
          const json = await response.json()
    
          if (json.status === "success") {
            setStatus("SUCCESS")
            return
          }
        } catch (err) {
          setStatus("ERROR")
          console.log(err)
        } **/}
    }
    
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const target = event.currentTarget.name;
        const targetValue = event.currentTarget.value;

        if (target === "first_name") {
            setName(targetValue)
        } else if (target === "last_name") {
            setLastName(targetValue)
        } else if (target === "user_name") {
            setUserName(targetValue)
        } else if (target === "email") {
            setEmail(targetValue)
        } else if (target === "password") {
            setPassword(targetValue)
        } else if (target === "confirm_password") {
            setConfirmPwd(targetValue)
        } else {
            alert("something went wrong with input")
        }
        

    }

    return (
        <Wrapper className="registerWrapper">
            <div className="registerContainer">
                <Heading attrLevel="h1" className="formTitle" text="CREATE AN ACCOUNT" />
                <Form className="registerForm" onSubmit={handleSubmit} >
                    <InputForm
                        aria-label="Your first name"
                        name="first_name"
                        type="text"
                        value={name}
                        placeholder="name" 
                        onChange={onChangeHandler}
                    />
                    <InputForm
                        aria-label="Your last name"
                        name="last_name"
                        type="text"
                        value={lastName}
                        placeholder="last name" 
                        onChange={onChangeHandler}
                    />
                    <InputForm
                        aria-label="Your username"
                        name="user_name"
                        type="text"
                        value={userName}
                        placeholder="username"
                        onChange={onChangeHandler}
                    />
                    <InputForm
                        aria-label="Your email"
                        name="email"
                        type="text"
                        value={email}
                        placeholder="email"
                        onChange={onChangeHandler}
                    />
                    <InputForm
                        aria-label="Your password"
                        name="password"
                        type="text"
                        value={password}
                        placeholder="password"
                        onChange={onChangeHandler}
                    />
                    <InputForm
                        aria-label="Confirm password"
                        name="confirm_password"
                        type="text"
                        value={confirmPwd}
                        placeholder="confirm password" 
                        onChange={onChangeHandler}
                    />
                    <Heading className="agreement" attrLevel="p" text="By creating an account, I consent to the processing of my personal data in accordance with the PRIVACY POLICY" />
                    <Button as="button" className="btn create" type="submit" onClick={() => console.log("btn form register")}>
                        CREATE
                    </Button>
                </Form>
            </div>
        </Wrapper>
    )
};

export default Register;