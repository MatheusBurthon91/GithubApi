// eslint-disable-next-line import/no-unresolved
import ScreenRepositories from "./components/ScreenRepositories";
// eslint-disable-next-line import/no-unresolved
import ScreenUserData from "./components/ScreenUserData";
// eslint-disable-next-line import/no-unresolved
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <main>
      <SearchBar />
      <ScreenUserData />
      <h1>Teste de api do github</h1>
      <ScreenRepositories />
    </main>
  );
}
