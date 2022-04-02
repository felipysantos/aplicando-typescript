import { useHistory } from "react-router-dom";

const Landingpage = () => {
  const history = useHistory();

  return (
    <>
      <button onClick={() => history.push("/")}>Landing</button>
      <button onClick={() => history.push("/login")}>Login</button>
      <button onClick={() => history.push("/signup")}>Signup</button>
    </>
  );
};

export default Landingpage;
