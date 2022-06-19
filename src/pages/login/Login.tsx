
import React from 'react';
import Button from "../../components/elements/Button";
import Heading from "../../components/elements/Heading";
import { Form, InputForm, Link, Wrapper } from "./index.styles";


const Login = () => {
    return (
        <Wrapper className="loginWrapper">
            <div className="loginContainer">
                <Heading attrLevel="h1" className="loginTitle" text="SIGN IN" />
                <Form>
                    <InputForm placeholder="username" />
                    <InputForm placeholder="password" />
                    <Button className="btn login" as="button" type="submit" onClick={() => console.log("btn form register")}>
                        LOGIN
                    </Button>
                    <Link> FORGOT PASSWORD?</Link>
                    <Link> CREATE NEW ACCOUNT</Link>
                </Form>
            </div>
        </Wrapper>
    )
};

export default Login;