import React from 'react';
import { Send } from "@mui/icons-material";
import { useFormFields } from "../../utils/hooks";
import Button from "../elements/Button";
import Heading from "../elements/Heading";
import Input from "../elements/input/Input";
import { Wrapper } from "./index.styles";


const NewsLetter = () => {

    const { formFields, createChangeHandler } = useFormFields({
        email: "",
      });

      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formFields.email)
      };
    return (
        <Wrapper>
            <Heading
                attrLevel="h1"
                className="titleNewsLetter"
                text="NewsLetter"
            />
            <Heading
                attrLevel="p"
                className="descNewsLetter"
                text="Get timely updates from your favorite products."
            />
            <div className="inputBtnContainer">
                <Input
                    role="textbox"
                    formClassName="formNewsLetter"
                    onSubmit={handleSubmit}
                    inputClassName="inputNewsLetter"
                    method="post"
                    type="email"
                    name="txtEmail"
                    value={formFields.email}
                    aria-label="get user email address"
                    onChangeInput={createChangeHandler("email")}
                    placeholder="your email address"
                    autoComplete="off"
                    autoFocus
                    required
                />
                <Button
                    className="btn newsLetter"
                    name="btn submit"
                    type="submit"
                    value=""
                    onClick={() => console.log("btn email")}
                >
                    <Send />
                </Button>
            </div>
        </Wrapper>
    )
};

export default NewsLetter;