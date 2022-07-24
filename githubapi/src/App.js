// eslint-disable-next-line import/no-unresolved
import Header from "./components/Header";
// eslint-disable-next-line import/no-unresolved
import ScreenRepositories from "./components/ScreenRepositories";
// eslint-disable-next-line import/no-unresolved
import ScreenUserData from "./components/ScreenUserData";
// eslint-disable-next-line import/no-unresolved
import SearchBar from "./components/SearchBar";

import "./style.css";

export default function App() {
  return (
    <main className="all-page">
      <Header />
      <SearchBar />
      <ScreenUserData />
      <ScreenRepositories />
    </main>
  );
}
