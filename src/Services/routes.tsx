import { Switch, Route } from "react-router-dom";
import Landingpage from "../Pages/Landingpage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Landingpage} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/signup"} component={Signup} />
    </Switch>
  );
};

export default Routes;
