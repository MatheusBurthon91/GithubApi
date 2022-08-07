// eslint-disable-next-line import/no-unresolved
import GithubSearch from "./pages/GithubSearch";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// agora vamos fazer com que a pagina tenha rotas para branches
// para isso vamos ter que usar a lib react router dom

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GithubSearch} />
      </Switch>
    </BrowserRouter>
  );
}
