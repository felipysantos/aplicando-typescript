import React from "react";
import { ButtonPage } from "../../Components/Button";
import { InputPage } from "../../Components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";
import { ContainerStyled, FormStyled, PStyled, SummaryStyled } from "./styles";

const Signup = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required(() =>
      toast.error("Nome obrigatório!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    ),
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
    toast.success("Cadastro efetuado com sucesso", {
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
        className="signupForm"
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
          Cadastro
        </SummaryStyled>
        {/* INPUT NAME */}
        <InputPage
          id="1"
          background={errors.name ? "red" : "#b7b3f1"}
          type={"text"}
          placeholder={"Nome"}
        >
          {{ ...register("name") }}
        </InputPage>

        {/* INPUT EMAIL */}
        <InputPage
          id="2"
          background={errors.email ? "red" : "#b7b3f1"}
          type={"text"}
          placeholder={"E-mail"}
        >
          {{ ...register("email") }}
        </InputPage>

        {/* INPUT PASSWORD */}
        <InputPage
          id="3"
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
          Já possui uma conta?{" "}
          <Link
            to={"/login"}
            style={{
              textDecoration: "none",
              color: "#817be7",
              fontWeight: "900",
            }}
          >
            Login
          </Link>
        </PStyled>
      </FormStyled>
    </ContainerStyled>
  );
};

export default Signup;
