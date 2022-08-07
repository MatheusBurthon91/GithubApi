// eslint-disable-next-line import/no-unresolved
import Header from "./components/Header";
// eslint-disable-next-line import/no-unresolved
import ScreenRepositories from "./components/ScreenRepositories";
// eslint-disable-next-line import/no-unresolved
import ScreenUserData from "./components/ScreenUserData";
// eslint-disable-next-line import/no-unresolved
import SearchBar from "./components/SearchBar";

// agora vamos fazer com que a pagina tenha rotas para branches
// para isso vamos ter que usar a lib react router dom

export default function App() {
  return (
    <main>
      <Header />
      <SearchBar />
      <ScreenUserData />
      <ScreenRepositories />
    </main>
  );
}
