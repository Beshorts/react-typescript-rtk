import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
        ), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .loginContainer {
        width: 40%;
        padding: 20px;
        background-color: white;
        
        .loginTitle {
            font-size: 14px;
            font-weight: 500;
        }

        .btn {
            width: 40%;
            border: none;
            padding: 15px 20px;
            background-color: teal;
            color: white;
            font-weight: 600;
            margin: 20px 0px;
            cursor: pointer;
        }
    }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
` 

export const InputForm = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 8px;
`

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
      color: blue;
  }
  
`