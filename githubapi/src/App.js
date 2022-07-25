// eslint-disable-next-line import/no-unresolved
import Header from "./components/Header";
// eslint-disable-next-line import/no-unresolved
import ScreenRepositories from "./components/ScreenRepositories";
// eslint-disable-next-line import/no-unresolved
import ScreenUserData from "./components/ScreenUserData";
// eslint-disable-next-line import/no-unresolved
import SearchBar from "./components/SearchBar";

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
