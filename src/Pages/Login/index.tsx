import React from "react";
import { ButtonPage } from "../../Components/Button";
import { InputPage } from "../../Components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ContainerStyled, FormStyled, PStyled, SummaryStyled } from "./styles";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(() =>
        toast.error("Email obrigatório!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      ),
    password: yup.string().required(() =>
      toast.error("Senha obrigatório!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandle = (data: any) => {
    toast.success("Logado com sucesso", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    reset();
  };

  return (
    <ContainerStyled>
      {/* TOASTIFY */}
      <ToastContainer />

      {/* FORMULÁRIO */}
      <FormStyled
        onSubmit={handleSubmit(onSubmitHandle)}
        initial={{ x: "300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <SummaryStyled
          initial={{ x: "50px", opacity: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
          }}
        >
          Login
        </SummaryStyled>
        {/* INPUT EMAIL */}
        <InputPage
          id="1"
          background={errors.email ? "red" : "#b7b3f1"}
          type={"text"}
          placeholder={"E-mail"}
        >
          {{ ...register("email") }}
        </InputPage>

        {/* INPUT PASSWORD */}
        <InputPage
          id="2"
          background={errors.password ? "red" : "#b7b3f1"}
          type={"password"}
          placeholder={"Senha"}
        >
          {{ ...register("password") }}
        </InputPage>

        {/* BOTÃO PARA ENVIAR FORMULÁRIO */}
        <ButtonPage color={"#fff"} backgroundColor={"#817be7"} type={"submit"}>
          Submit
        </ButtonPage>
        {/* REDIRECIONAMENTO PARA TELA DE CADASTRO */}
        <PStyled
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          Não tem conta ainda?{" "}
          <Link
            to={"/signup"}
            style={{
              textDecoration: "none",
              color: "#817be7",
              fontWeight: "900",
            }}
          >
            Cadastre-se
          </Link>
        </PStyled>
      </FormStyled>
    </ContainerStyled>
  );
};

export default Login;
