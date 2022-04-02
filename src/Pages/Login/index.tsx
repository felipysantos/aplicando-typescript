import React from "react";
import { ButtonPage } from "../../Components/Button";
import { InputPage } from "../../Components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ContainerStyled, FormStyled, SummaryStyled } from "./styles";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(() =>
        toast.dark("Campo obrigatório!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      ),
    password: yup.string(),
  });



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandle = (data: any) => {
    console.log(data);

    reset();
  };

  return (
    <ContainerStyled>
      {/* TOASTIFY */}
      <ToastContainer />

      {/* FORMULÁRIO */}
      <FormStyled onSubmit={handleSubmit(onSubmitHandle)}>
        <SummaryStyled>Login</SummaryStyled>
        {/* INPUT EMAIL */}
        <InputPage type={"text"} placeholder={"E-mail"}>
          {{ ...register("email") }}
        </InputPage>

        {/* INPUT PASSWORD */}
        <InputPage type={"password"} placeholder={"Senha"}>
          {{ ...register("password") }}
        </InputPage>

        {/* BOTÃO PARA ENVIAR FORMULÁRIO */}
        <ButtonPage color={"#fff"} backgroundColor={"#817be7"} type={"submit"}>
          Submit
        </ButtonPage>
        {/* REDIRECIONAMENTO PARA TELA DE CADASTRO */}
        <p>
          Não tem conta ainda? <Link to={"/signup"}>Cadastre-se</Link>
        </p>
      </FormStyled>
    </ContainerStyled>
  );
};

export default Login;
