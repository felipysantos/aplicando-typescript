import { useHistory } from "react-router-dom";
import { ButtonPage } from "../../Components/Button";
import {
  ButtonContainerStyled,
  ContainerStyled,
  PStyled,
  SummaryStyled,
} from "./styles";

const Landingpage = () => {
  const history = useHistory();

  return (
    <ContainerStyled>
      {/* TITULO */}
      <SummaryStyled
        initial={{ x: "50px", opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          delay: 0.3,
        }}
        color={"#fff"}
      >
        Landing Page
      </SummaryStyled>

      {/* DESCRIÇÃO DA PAGINA */}
      <PStyled
        initial={{ x: "50px", opacity: 0 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4,
        }}
        color={"#fff"}
      >
        Simples apliação para praticar Typescript.
      </PStyled>

      {/* DIV PARA OS BOTOES */}
      <ButtonContainerStyled>
        <ButtonPage
          color={"#fff"}
          backgroundColor={"#817be7"}
          onClick={() => history.push("/login")}
        >
          Login
        </ButtonPage>
        <ButtonPage
          color={"#fff"}
          backgroundColor={"#43dd4b"}
          onClick={() => history.push("/signup")}
        >
          Signup
        </ButtonPage>
      </ButtonContainerStyled>
    </ContainerStyled>
  );
};

export default Landingpage;
